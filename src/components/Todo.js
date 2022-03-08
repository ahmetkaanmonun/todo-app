import {
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@material-ui/core";
import React from "react";
import "../Todo.css";

function Todo(props) {
  return (
    <Container>
      <Box boxShadow={3}>
        <List className="todo__list">
          <ListItem>
            <ListItemText primary="Todo" secondary={props.text} />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default Todo;
