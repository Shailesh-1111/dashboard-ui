import React, { useContext, useState, useEffect } from 'react';
import './TopNavbar.scss';
import { ThemeContext } from '../../context/ThemeContext';
import Icon from '../../components/Icon/Icon';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SearchBar from '../SearchBar/SearchBar';

const TopNavBar = ({ toggleLeftSidebar, toggleRightSidebar, breadCrumPath, setBreadCrumPath }) => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-icon" onClick={toggleLeftSidebar}>
          <Icon name="Sidebar" alt="Sidebar" />
        </div>
        <div className="nav-icon">
          <Icon name="Star" alt="Star" />
        </div>
        <div className="breadcrumbs">
          <Breadcrumb paths={breadCrumPath} setBreadCrumPath={setBreadCrumPath}/>
        </div>
      </div>

      <div className="nav-right">
        <SearchBar
            value={searchTerm}  
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="nav-icon" onClick={toggleDark}>
          <Icon name="Sun" alt="Theme Toggle" />
        </div>
        <div className="nav-icon" onClick={toggleRightSidebar}>
          <Icon name="ClockCounterClockwise" alt="History" />
        </div>
        <div className="nav-icon" onClick={toggleRightSidebar}>
          <Icon name="Bell" alt="Notifications" />
        </div>
        <div className="nav-icon" onClick={toggleRightSidebar}>
          <Icon name="Sidebar" alt="Right Sidebar" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
