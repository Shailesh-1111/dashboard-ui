import React from "react";
import "./SearchBar.scss";
import Icon from "../../components/Icon/Icon";

const SearchBar = ({ placeholder = "Search", hotkey = "⌘/" }) => {
  return (
    <div className="searchbar">
      <div className="search-icon">
        <Icon name="Search" alt="Search" />
      </div>
      <input type="text" placeholder={placeholder} />
      <div className="hotkey-icon">{hotkey}</div>
    </div>
  );
};

export default SearchBar;
