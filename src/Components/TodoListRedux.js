import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addItem,deleteItem,removeAllItem } from "../Store/Slices/todolistwithredux"
import { useDispatch, useSelector } from "react-redux";

const TodoListRedux = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch()
  const state = useSelector((state)=>{
        return state.todoListWithRTK
  })
  return (
    <>
      <div className="container mb-5 border rounded bg-light">
        <h2 className="display-6 text-center text-light bg-dark rounded p-2 mt-3">TODO List using Redux</h2>
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
            onClick={()=>dispatch(addItem({input:input,id:Math.random()}),setInput(""))}
          >
            Add Item
          </Button>
          <Button
            variant="contained"
            className="d-block w-100"
            onClick={()=>dispatch(removeAllItem())}
          >
            Remove All Items
          </Button>
          <div className="container-fluid mt-5">
            <ol>
              {state.map((value,index,array)=>{
                return <li key={index} id={value.id} className="border-bottom pb-3">{value.input} <button className="btn btn-danger btn-sm float-end" onClick={()=>dispatch(deleteItem({id:value.id,array}))}>X</button> </li>
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListRedux;
