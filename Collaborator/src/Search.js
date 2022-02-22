import React, { useState } from 'react';

import './Search.css';
const SearchBar = () => (
    <div>
            <span className="visually-hidden">Search Jira(S) with keywords</span>
        
        <input
            type="text"
            id="header-search"
            placeholder="Serach Jira(s) with Jira:Keyword and employees with employee:name"
            name="s" 
            style={{
      
                width: window.innerWidth * 0.75,
              }}
        />
        <button type="submit">Search</button>
    </div>
);

export default SearchBar;