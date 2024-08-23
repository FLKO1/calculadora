import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default Button;
