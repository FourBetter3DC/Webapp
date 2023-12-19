import Navbar from "../components/Navbar";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function ShowName(){
    const [name, setName] = useState("");
  
    const handleSubmit = (event) => {
      alert(`Hello there ${name}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>
        <input type = "submit"/>
      </form>
    )
  
  }