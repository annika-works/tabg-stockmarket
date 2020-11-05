import React, { useState } from 'react';
import Li from '../common/DataLi';
import data from '../../data/data.json';

const Player = ({playerNameSelected}) => {
  console.log(playerNameSelected);


  return (
    <div className="player">
      <h1 className="player-name">{playerNameSelected.playerNameSelected}</h1>
      <ul className="player-data">
        <Li value="Total Value" dataVal="100.000"/>
        <Li value="Owners" dataVal="1000"/>
        <Li value="Stock Price" dataVal="$100"/>
      </ul>
    </div>
  );
};

export default Player;