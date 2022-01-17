import React, { useState } from 'react';
import List from './List';
import Table from './Table';
import './App.css';

function App() {
  const [displayUsers, setDisplayUsers] = useState('showList');

  const handleClickList = (e) => {
    setDisplayUsers('showList')
  };

  const handleClickTiles = (e) => {
    setDisplayUsers('showTiles');
  };

  return (
    <div>
      <button
        onClick={handleClickList}
      >
        List
      </button>
      <button
        onClick={handleClickTiles}
      >
        Tiles
      </button>
      <div id="container">
        {displayUsers === 'showList'
          ? <Table />
          : <List />
        }
      </div>
    </div>
  );
}

export default App;
