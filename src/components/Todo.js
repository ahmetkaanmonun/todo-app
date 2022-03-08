import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import "../Todo.css";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary="Todo" secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
