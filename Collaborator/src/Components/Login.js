import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './Login.css';

export default function Login({ setToken }) {
    
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>

    <form>
    <label>
        <p>Name</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Shareworks email address</p>
        <input type="email" onChange={e => setEmail(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
