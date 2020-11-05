import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const Menu = () => (
  <nav className="top-menu">
    <Input 
      type="text"
      className="search-field"
      placeholder="Search Stocks"
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

export default Menu;
