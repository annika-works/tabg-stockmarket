import {useState, useEffect} from 'react';
import Input from './components/common/Input';
import Button from './components/common/Button';
import Mainboard from  './components/Mainboard/Mainboard';
import data from './data/data.json';

function App() {
  const [onChangeValue, setonChangeValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [player, setPlayer] = useState('Name');

  const playerData = data.players;
  const dataPlayerNames = playerData.map(player => player.name);

  const onChange = e => setonChangeValue(e.currentTarget.value);

  const onKeyDown = e => {
    if(e.key === 'Enter') {
      setInputValue(onChangeValue);
      setonChangeValue('');
  };

  useEffect(() => {
    const singlePlayerArr = dataPlayerNames.filter(player => player === inputValue);
    (singlePlayerArr.length === 1)? setPlayer(inputValue) : setPlayer('');
  }, []);

  return (
    <div className="App">
      <header>
        <nav className="top-menu">
          <Input 
            type="text"
            className="search-field"
            name="search"
            value={onChangeValue}
            onChange={e => onChange(e)}
            placeholder="Search Stocks"
            tabIndex="0"
            onKeyDown={e => onKeyDown(e)}
          />
          <Button
              label="Best Stonks" 
              className="btn-primary"
          />
          <Button
              label="Worst Stonks" 
              className="btn-primary"
          />
        </nav>
      </header>
      <Mainboard playerNameSelected={playerNameSelected}/>
    </div>
  );
}

export default App;
