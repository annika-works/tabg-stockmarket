import React from 'react';
import Nav from './Nav';
import Player from './Player';

const Mainboard = (playerNameSelected) => (
  <main className="main">
    <Nav/>
    <Player playerNameSelected={playerNameSelected}/>
  </main>
);

export default Mainboard;
