import React from 'react';
import Icon from '../Icon/Icon';
import './HeaderSection.scss';


const HeaderSection = ({ title, data }) => {
  return (
    <div className="header-section">
      <div className="header-title">{title}</div>
      {data.map((item, index) => (
        <div className="header-item" key={`header-${index}-${item.name}`}>
          {item.name && <><Icon name="Dot" />{item.name} </>}
          <strong><p>{item.amount}</p></strong>
        </div>
      ))}
    </div>
  );
};

export default HeaderSection;
