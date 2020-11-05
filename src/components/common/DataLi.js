import React from 'react';

const Li = ({ className = 'data-el', value, dataVal }) => {
  return (
  <li className={className}>{value}
    <span className="data-value">{dataVal}</span>
  </li>
  );
};

export default Li;