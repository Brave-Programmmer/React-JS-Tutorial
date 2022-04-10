// import UseState from "./UseState";
import React from "react";
import UseEffect from "./UseEffect";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tut_mui from "./mui/Tut_mui";
import About from "./About";
import Avatar from "./avaterapi/avater";
import Crud from "./firebase/crud_app/Crud";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/avatar" element={<Avatar />}></Route>
          <Route path="/login" element={<Tut_mui />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/crud" element={<Crud />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
