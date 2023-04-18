import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function TodoList() {
  const [state, setState] = useState("")
  const [add, setAdd] = useState([])
  function onchange(event) {
    setState(event.target.value)
  }
  function addItem() {
    setAdd((value) => {
      setState("")
      let newArray = [...value, state]
      let filteredArray = newArray.filter((value) => {
        return value.length >= 1
      })
      let finalArray =  [...new Set(filteredArray)]
      return finalArray
    })
  }
  function remove(index) {
    let newList = add.filter((v, i) => {
      return ((index !== i))
    })
    setAdd(newList)
  }
  function removeAll() {
    setAdd([])
  }
  return (
    <div className="bg-light container  border rounded">
      <h1 className="bg-dark text-light text-center display-6 p-2 mt-3 rounded">Todo List</h1>
      <div className="container my-5  d-flex justify-content-center flex-column">
        <TextField
          id="standard-multiline-flexible"
          label="Add Item"
          multiline
          maxRows={4}
          variant="standard"
          style={{ width: "100%", boxSizing: "border-box", padding: "15px 0px" }}
          onChange={onchange}
          value={state}
        />
        <Button variant="outlined" onClick={addItem}>add</Button>
        <Button variant="contained" className="my-2" onClick={removeAll}>Remove All </Button>
        <div className="container">
          <p>Total Item in List : {add.length}</p>
          <ol className="container my-3 ">
            {add.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="border-bottom pb-3">{value}  <button className="btn btn-sm btn-danger float-end" onClick={() => remove(index) }>
                    Remove
                  </button></li>
                </React.Fragment>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
