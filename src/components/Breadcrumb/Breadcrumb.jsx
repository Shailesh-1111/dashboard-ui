import React from "react";
import { useNavigate } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = ({ paths = [], setBreadCrumPath }) => {
  const navigate = useNavigate();

  // Always display Home at the start
  const fullPaths = [{ label: "Home", link: "/" }, ...paths];

  const handleClick = (path, index) => {
    if (!path.link) return; // Skip if no link

    navigate(path.link);

    // Update breadcrumb excluding Home in state, since Home is always displayed
    setBreadCrumPath(fullPaths.slice(1, index + 1));
  };

  if (!fullPaths.length) return null;

  return (
    <nav className="breadcrumb">
      <ul>
        {fullPaths.map((path, index) => {
          const isLast = index === fullPaths.length - 1;
          const hasLink = !!path.link;

          return (
            <li key={index}>
              {index > 0 && <span className="separator">/</span>}
              {isLast || !hasLink ? (
                <span className="current">{path.label}</span>
              ) : (
                <span
                  className="clickable"
                  onClick={() => handleClick(path, index)}
                >
                  {path.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
