import React from 'react';
import Menu from './Menu';
  
  const Header = (onChange,onChangeValue, onKeyDown) => (
    <header>
      <Menu onKeyDown={e => onKeyDown(e)} onChangeValue={onChangeValue} onChange= {e => onChange(e)}/>
    </header>
  );

export default Header;

