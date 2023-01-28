import React, { useEffect, useState } from 'react'
import './alluser.css'

import { getUser } from '../../service/api'

export default function Alluser() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])


  const getAllUsers = async () => {
    const res = await getUser();
    setUsers(res.data)
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
        </tr>
        {
          users.map(user => (
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        }
      </table>
    </div>
    </>
  )
}
