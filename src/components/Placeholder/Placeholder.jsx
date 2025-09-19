import React from 'react';
import './Placeholder.scss';

const Placeholder = ({ title, description }) => {
  return (
    <div className="placeholder">
      <div className="placeholder-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="placeholder-icon">🚧</div>
      </div>
    </div>
  );
};

export default Placeholder;
