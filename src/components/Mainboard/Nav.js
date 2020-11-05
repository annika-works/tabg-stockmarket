import React from 'react';
import Button from '../common/Button';

const Nav = () => (
  <nav className="side-nav">
    <Button
      label="Total" 
      className="btn-primary selected"
    />
    <Button
      label="1 day" 
    />
    <Button
      label="1 Week" 
    />
    <Button
      label="1 Month" 
    />
    <Button
      label="1 Year" 
    />
  </nav>
);

export default Nav;