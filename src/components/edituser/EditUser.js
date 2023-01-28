import React, { useEffect, useState } from "react";
import "../adduser/adduser.css";
import { edituser, getUser } from "../../service/api";

import { useParams } from "react-router-dom";

export default function EditUser() {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const [user, setUser] = useState(defaultValue);

  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async (e) => {
    const res = await getUser(id);
    setUser(res.data[0]);
  };

  const onValueChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  };

  const editUserDetails = async () => {
    await edituser(user, id);
  };

  return (
    <>
      <div className="form_container">
        <h1>Edit User</h1>
        <form>
          <input
            type="text"
            required
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
            placeholder="name"
          />
          <input
            type="text"
            placeholder="username"
            required
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
          <input
            type="number"
            placeholder="phone"
            required
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
          <button onClick={() => editUserDetails()}>Edit user</button>
        </form>
      </div>
    </>
  );
}
