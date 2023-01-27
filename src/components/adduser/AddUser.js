import React from 'react'
import './adduser.css'

export default function AddUser() {

  const onValueChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="form_container">
        <h2>Add User</h2>
      <form>
        <input type="text"  placeholder='name' required onChange={(e) => onValueChange(e)}/>
        <input type="text" placeholder='username' required onChange={(e) => onValueChange(e)}/>
        <input type="email" placeholder='Email' required onChange={(e) => onValueChange(e)}/>
        <input type="number" placeholder='phone' required onChange={(e) => onValueChange(e)}/>
        <button>Add user</button>
      </form>
      </div>
    </>
  )
}
