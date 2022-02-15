import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Treeview from './Components/Treeview';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
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