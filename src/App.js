import React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";
export default function App() {

  return (
    <div>
      <img src={require("./Logo-smart-waves.png")} alt="Smart Waves Inc. logo"/>
      <nav>
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}