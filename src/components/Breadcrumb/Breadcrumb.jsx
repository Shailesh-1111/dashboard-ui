import React from "react";
import { useNavigate } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = ({ paths = [], setBreadCrumPath }) => {
  const navigate = useNavigate();

  const fullPaths = [{ label: "Home", link: "/" }, ...paths];

  const handleClick = (path, index) => {
    if (!path.link) return;

    navigate(path.link);

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
            <li key={`breadcrumb-${index}-${path.label}`}>
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
