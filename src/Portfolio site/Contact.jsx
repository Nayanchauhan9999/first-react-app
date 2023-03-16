import React from 'react'

const Contact = () => {
  const submit = (e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id='fname' placeholder='First Name'/>
        <br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id='lname' placeholder='Last Name'/>
      </form>
    </div>
  )
}

export default Contact