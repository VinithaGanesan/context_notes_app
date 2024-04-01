import React, { useState } from 'react';
import './StarRadioButton.css';

const StarRadioButton = ({ id, name, checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked || false);

  const handleClick = () => {
    setChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <div className={`star-radio-button ${isChecked ? 'checked' : ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleClick}
      />
      <label htmlFor={id} onClick={handleClick}>
        ★
      </label>
    </div>
  );
};

export default StarRadioButton;
