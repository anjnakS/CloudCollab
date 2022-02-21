import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import Treeview from './Components/Treeview';

function App() {

  return (
    <div className="wrapper">
      <h1>Cloud Collaborators</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Treeview />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;