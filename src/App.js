import React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";

export default function App() {

  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/Login">Invoices</Link> |{" "}
        <Link to="/Dashboard">Expenses</Link>
      </nav>
    </div>
  );
}