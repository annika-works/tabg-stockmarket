import React from 'react';
import Nav from './Nav';
import Player from './Player';

const Mainboard = ({player}) => (
  <main className="main">
    <Nav/>
    <Player player={player}/>
  </main>
);

export default Mainboard;
