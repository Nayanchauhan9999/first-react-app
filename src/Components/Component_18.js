import React, { useState } from 'react'

const Component18 = () => {
  const [state, setState] = useState("");
  const [add, setAdd] = useState([])
  function onchange(event) {
    setState(event.target.value);
  }
  function addItem() {
    setAdd((value) => {
      return [ ...value,state]
    })
    setState("")
  }
  function remove(index) {
    let newList = add.filter((v,i)=>index !==i)
    setAdd(newList)
  }
  return (
    <React.Fragment>
      <h1>Component 18 : toDo List</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add items to list" onChange={onchange} value={state} />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>Add</button>
      </div>
      <ol>
        {add.map((value, index) => {
          return (<React.Fragment>
            <li key={index}> {value} <button onClick={()=>{remove(index)}}>Remove</button></li>

          </React.Fragment>)
        })}
      </ol>

    </React.Fragment>
  )
}


export default Component18;
