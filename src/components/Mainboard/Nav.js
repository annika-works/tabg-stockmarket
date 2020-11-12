import React from 'react';
import Button from '../common/Button';

const Nav = () => (
  <nav className="side-nav">
    <Button
      label="Total" 
      id="total"
      className="btn-primary selected"
    />
    <Button
      label="1 day" 
      classname="btn-primary day"
    />
    <Button
      label="1 Week" 
      classname="btn-primary week"
    />
    <Button
      label="1 Month"
      classname="btn-primary month" 
    />
    <Button
      label="1 Year"
      classname="btn-primary year" 
    />
  </nav>
);

export default Nav;