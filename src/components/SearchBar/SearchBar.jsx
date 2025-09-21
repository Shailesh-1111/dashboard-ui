import React from "react";
import "./SearchBar.scss";
import Icon from "../../components/Icon/Icon";

const SearchBar = ({ 
  placeholder = "Search", 
  hotkey = "⌘/", 
  width, 
  height, 
  value='',       // add this
  onChange = ()=>{}     // add this
}) => {
  return (
    <div
      className="searchbar"
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      }}
    >
      <div className="search-icon">
        <Icon name="Search" alt="Search" />
      </div>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}       // bind value
        onChange={onChange} // bind onChange
      />
      <div className="hotkey-icon">{hotkey}</div>
    </div>
  );
};


export default SearchBar;
