import React, { useState } from 'react'
import './adduser.css'
import { adduser } from '../../service/api';




export default function AddUser() {
  const defaultValue = {
    name : '',
    username : '',
    email : '',
    phone: ''
  }

  const[user, setUser] = useState(defaultValue);


  const onValueChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  const addUserDetails = async () => {
     await adduser(user);
  }

  return (
    <>
      <div className="form_container">
        <h1>Add User</h1>
      <form>
        <input type="text"  placeholder='name' required onChange={(e) => onValueChange(e)} name="name"/>
        <input type="text" placeholder='username' required onChange={(e) => onValueChange(e)} name="username"/>
        <input type="email" placeholder='Email' required onChange={(e) => onValueChange(e)} name="email" />
        <input type="number" placeholder='phone' required onChange={(e) => onValueChange(e)} name="phone"/>
        <button onClick={() => addUserDetails()}>Add user</button>
      </form>
      </div>
    </>
  )
}
