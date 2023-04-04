import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoListRedux = () => {
  const [input, setInput] = useState();
  return (
    <>
      <hr />
      <hr />
      <div className="container mb-5">
        <h2 className="display-6 text-center">TODO List using Redux</h2>
        <div className="container-fluid">
          <TextField
            id="standard-multiline-flexible"
            label="Add Items"
            multiline
            maxRows={4}
            variant="standard"
            style={{ width: "100%" }}
            className="mt-5 mb-3"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button
            variant="outlined"
            className="d-block w-100 mb-2"
          >
            Add Item
          </Button>
          <Button
            variant="contained"
            className="d-block w-100"
          >
            Remove All Items
          </Button>
          <div className="container-fluid mt-5">
            <ol>
              <li>Apple</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListRedux;
