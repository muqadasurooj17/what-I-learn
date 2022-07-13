
//import { React, useState } from "react";
//import { Input } from "@mui/material";
import React from "react";
import List from "../../Components/List.JS";
import "./Searchbar.css";
function App() {
 
    return (
      <div className="main">
        <h1>React Search</h1>
        <div className="search">
        <input className="search-bar" 
        placeholder="enter the item name"
         type="text"/>
    </div>
        <List />
       
      </div>
    );
  }
  
  export default App;
