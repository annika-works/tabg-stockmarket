import {useState} from 'react';
import Input from './components/common/Input';
import Button from './components/common/Button';
import data from './data/data.json';
const playerData = data.players;
const dataPlayerNames = playerData.map(player => player.name);


function App() {
  const [onChangeValue, setonChangeValue] = useState('');
  const [inputValue, setInputValue] = useState('Wilnyl');
  const [totalVal, setTotalVal] = useState(['10', '20', '30']);
  const [isActive, setActive] = useState(false);
  // console.log(dataPlayerNames);
  const indiPlayer = playerData.find(player => player.name === inputValue);
  const stocks = indiPlayer.stocks;

  const toggleClass = () => {
    setActive(!isActive);
  };
  
  const onChange = (e) => {
    setonChangeValue(e.currentTarget.value)
  };

  const onKeyDown = e => {
    if(e.key === 'Enter') {
      setInputValue(onChangeValue);
      setonChangeValue('');
    }
  };
  
  const onTotalClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue);
    if(!playerExists) return;
    setTotalVal([stocks.total.totalvalue, stocks.total.owners, stocks.total.stockprice]);

  }

  const onDayClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue);
    if(!playerExists) return;
    setTotalVal([stocks.day.totalvalue, stocks.day.owners, stocks.day.stockprice]);

    toggleClass();
  }

  const onWeekClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue);
    if(!playerExists) return;
    setTotalVal([stocks.week.totalvalue, stocks.week.owners, stocks.week.stockprice]);
  }

  const onMonthClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue);
    if(!playerExists) return;
    setTotalVal([stocks.month.totalvalue, stocks.month.owners, stocks.month.stockprice]);
  }

  const onYearClick = () => {
    const playerExists = dataPlayerNames.includes(inputValue);
    if(!playerExists) return;
    setTotalVal([stocks.year.totalvalue, stocks.year.owners, stocks.year.stockprice]);
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
            className={isActive ? 'btn-primary selected': 'btn-primary'}
            onClick={() => onDayClick()}
          />
          <Button
            label="1 Week" 
            className="btn-primary"
            onClick={() => onWeekClick()}
          />
          <Button
            label="1 Month"
            className="btn-primary" 
            onClick={() => onMonthClick()}
          />
          <Button
            label="1 Year"
            className="btn-primary" 
            onClick={() => onYearClick()}
          />
        </nav>

        <div className="player">
          <h1 className="player-name">{inputValue}</h1>
          <ul className="player-data">
            <li className="data-el" value="Total Value">
              Total Value:
              <span className="data-value">{totalVal[0]}</span>
            </li>
            <li className="data-el" value="Owners">
              Owners:
              <span className="data-value">{totalVal[1]}</span>
            </li>
            <li className="data-el" value="Stock Price">
              Stock Price:
              <span className="data-value">{totalVal[2]}</span>
            </li>
          </ul>
        </div>

      </main>
    </div>
  );
}

export default App;
