import React, { useEffect, useState } from 'react'
import './alluser.css'

import { getUsers, deleteUser} from '../../service/api'
import {CiEdit} from 'react-icons/ci'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export default function Alluser() {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [])


  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data)
  }
  

  const edit = (user) => {
    navigate(`/edit/${user._id}`)
  }


  const deleteUserDetails = async (id) => {
    await deleteUser(id)
    getAllUsers();
  }
  return (
    <>
    <div className="table_container">
      <h2>All Users</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
        {
          users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td><button id='edit' onClick={(e) => edit(user)}><CiEdit/></button> <button id='delete' onClick={() => deleteUserDetails(user._id)}><RiDeleteBin6Line/></button></td>
            </tr>
          ))
        }
      </table>
    </div>
    </>
  )
}
