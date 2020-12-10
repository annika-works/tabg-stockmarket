import {useState} from 'react';
import Input from './components/common/Input';
import Button from './components/common/Button';
import data from './data/data.json';
const playerData = data.players;
const dataPlayerNames = playerData.map(player => player.name);

function App() {
  const [onChangeValue, setonChangeValue] = useState('');
  const [inputValue, setInputValue] = useState('Wilnyl');

  const [totalVal, setTotalVal] = useState('10.000');
  console.log(dataPlayerNames);
  
  const onChange = (e) => {
    setonChangeValue(e.currentTarget.value)
  };

  const onKeyDown = e => {
    if(e.key === 'Enter') {
      setInputValue(onChangeValue);
      setonChangeValue('');
    }
  };
  
  const indiPlayer= playerData.find(player => player.name === inputValue);
  
  const onTotalClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue)

    if(!playerExists) {
      return;
    }

    setTotalVal(indiPlayer.stocks.total.totalvalue);
  }

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

      <main className="main">
        <nav className="side-nav">
          <Button
            label="Total" 
            id="total"
            className="btn-primary selected"
            onClick={() => onTotalClick()}
          />
          <Button
            label="1 day" 
            className="btn-primary day"
          />
          <Button
            label="1 Week" 
            className="btn-primary week"
          />
          <Button
            label="1 Month"
            className="btn-primary month" 
          />
          <Button
            label="1 Year"
            className="btn-primary year" 
          />
        </nav>

        <div className="player">
          <h1 className="player-name">{inputValue}</h1>
          <ul className="player-data">
            <li className="data-el" value="Total Value">
              Total Value:
              <span className="data-value">{totalVal}</span>
            </li>
            <li className="data-el" value="Owners">
              Owners:
              <span className="data-value">1000</span>
            </li>
            <li className="data-el" value="Stock Price">
              Stock Price:
              <span className="data-value">$100</span>
            </li>
          </ul>
        </div>

      </main>
    </div>
  );
}

export default App;
