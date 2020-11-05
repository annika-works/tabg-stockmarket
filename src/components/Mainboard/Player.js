import React from 'react';
import Li from '../common/DataLi';

const Player = () => (
    <div className="player">
      <h1 className="player-name">Wilnyl</h1>
      <ul className="player-data">
        <Li value="Total Value" dataVal="100.000"/>
        <Li value="Owners" dataVal="1000"/>
        <Li value="Stock Price" dataVal="$100"/>
      </ul>
    </div>
);

export default Player;