import { Button, FormControl, Input, InputLabel, Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import Todo from "./components/Todo";
import Header from "./components/Header";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <Header />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1}
        m={2}
      >
        <form>
          <FormControl>
            <InputLabel>Write a Todo</InputLabel>
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>

          <Button
            size="large"
            disabled={!input}
            type="submit"
            onClick={addTodo}
            variant="contained"
            color="secondary"
          >
            Add to do
          </Button>
        </form>
      </Box>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
