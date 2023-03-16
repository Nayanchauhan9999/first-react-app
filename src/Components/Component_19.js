import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Component19(props) {
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
      let mainArray = new Set(filteredArray)
      let finalArray = Array.from(mainArray)
      // let jsonArray = JSON.stringify(finalArray)
      // localStorage.setItem("TodoList", jsonArray)
      // let realArray = JSON.parse(localStorage.getItem("TodoList"))
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
    <React.Fragment>
      <hr />
      <h1>Todo list is back Again : Component19</h1>
      <div className="container my-5  d-flex justify-content-center flex-column">
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
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
                  <li style={{ margin: "25px" }}>{value}  <Button variant="outlined" color="error" style={{ float: "right" }} onClick={() => { remove(index) }}>
                    Remove
                  </Button></li>
                  {localStorage.getItem("Todolist")}
                </React.Fragment>
              )
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Component19;
