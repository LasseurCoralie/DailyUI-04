import React from 'react';

import './ClearButtonStyled.css';

const ClearButton = ({handleClear, children}) => {
  return (
    <div className="clear-btn" onClick={handleClear}>{children}</div>
  );
};

export default ClearButton;