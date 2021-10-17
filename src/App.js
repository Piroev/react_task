import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from "./UsersList";
import EditUser from './EditUser';


function App() {
    const [isHidden, setIsHidden] = useState(true);
  return (
      <div>
        <button className="btns" onClick={() => setIsHidden((s) => !s)}>{ isHidden ? "Show users list" : "Hide"}</button>
        <button className="btns">Show products list</button>
          <div>{
            !isHidden ? <UsersList/> : ""
          }
          </div>
          <EditUser/>
      </div>

  );
}

export default App;
