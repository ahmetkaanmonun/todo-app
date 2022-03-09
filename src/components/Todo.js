import {
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Button,
  Typography,
  Modal,
  makeStyles,
  Input,
} from "@material-ui/core";
import React from "react";
import "../Todo.css";
import db from "../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const data = `${day}/${month}/${year}`;

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "2px solid #000",
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));
function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <Container>
      <Box boxShadow={3}>
        <Modal
          open={open}
          onClose={(e) => setOpen(false)}
          className={classes.paper}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={1}
            m={2}
          >
            <Typography variant="h4">Open</Typography>
            <Input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            ></Input>
            <Button onClick={updateTodo}>Update Todo</Button>
          </Box>
        </Modal>
        <List className="todo__list">
          <ListItem>
            <ListItemText
              primary={<Typography>{props.todo.todo}</Typography>}
              secondary={
                <Box display="flex" marginTop="10px">
                  <QueryBuilderIcon />
                  <Typography>{data}</Typography>
                </Box>
              }
            />
          </ListItem>
          <Button onClick={(e) => setOpen(true)}>Edit</Button>
          <Button
            onClick={(event) => {
              db.collection("todos").doc(props.todo.id).delete();
            }}
          >
            <DeleteIcon /> Delete
          </Button>
        </List>
      </Box>
    </Container>
  );
}

export default Todo;
