// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import { Button } from "./components/custom/Button"
// import Forms from "./components/Forms"

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <Button theme={theme}>Click me</Button>
      <br></br>
      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
        toggle theme
      </button>

      {/* <Forms onSubmit={(e) => {
      e.preventDefault()
      console.log("Signing In")
      }}>
        <input type="text" placeholder='signin'/>
        <input type="password" placeholder='Password'/>
        <input type="submit" value='sign-In'/>

      </Forms>

      <Forms onSubmit={(e) => {
        e.preventDefault();
        console.log("Signing up")
      }}>
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='confirm password'/>
        <input type="submit" value='sign-Up'/>
      // </Forms> */}


    </div>
  );
}

export default App;
