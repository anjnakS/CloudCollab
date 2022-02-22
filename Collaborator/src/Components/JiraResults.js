import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JiraItem from './JiraItem';
export default function JiraResults() {
  return (
    <div style={{ display: 'block',
                  width: 700, padding: 30 }}>
        <Link to='/'>Go Back</Link>
         
        <JiraItem/> 
        <JiraItem/> 
        <JiraItem/> 
        <JiraItem/> 
        <JiraItem/> 
      
    </div>
  );
}