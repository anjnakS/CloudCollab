import React, { useState } from 'react';
import './Search.css';
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Jira(S) with keywords</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Serach Jira(s) with keywords"
            name="s" 
            style={{
      
                width: window.innerWidth * 0.75,
              }}
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;