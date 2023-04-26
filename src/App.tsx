import React, { ChangeEvent, useState } from 'react';
import './App.css';

// Type we need for our state
interface UserInputType {
  username: string
  pw: string
}

const initialState = { username: "", pw: "" }

function App() {
  useState<UserInputType>(initialState)

  // Use state to save the value from inputs
  const [userInput, setUserInput] = useState<UserInputType>(initialState);

  function setUsername(e: ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, username: e.target.value });
  }

  function setPw(e: ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, pw: e.target.value });
  }


  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={(e) => setUsername(e)}></input>
      <h3>Password</h3>
      <input type="text" onChange={(e) => setPw(e)}></input>
    </div>
  );
}

export default App;
