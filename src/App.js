import "./App.css";
import AddUser from "./components/adduser/AddUser";
import Alluser from "./components/alluser/Alluser";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./components/edituser/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/all' element = {<Alluser />} />
          <Route path='/add' element = {<AddUser />} />
          <Route path='/edit/:id' element = {<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
