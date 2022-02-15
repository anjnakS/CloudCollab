import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Treeview from './Components/Treeview';
import Login from './Components/Login';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/collab">
            <Treeview />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;