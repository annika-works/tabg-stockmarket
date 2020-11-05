import Button from '../common/Button';
import Input from '../common/Input';
// import data from '../../data/data.json';

const Menu = (onChange, onKeyDown, onChangeValue) => {

  return (
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
  );
};

export default Menu;
