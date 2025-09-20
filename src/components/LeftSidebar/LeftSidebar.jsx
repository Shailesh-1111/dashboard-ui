import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LeftSidebar.scss';
import Icon from '../../components/Icon/Icon';
import ByeWind from '../../assets/images/ByeWind.png';


const favouritesArray = [
  { id: 'fav-overview', label: 'Overview', path: '/dashboard?fav-overview' },
  { id: 'fav-projects', label: 'Projects', path: '/dashboard?fav-projects' },
];

const dashboardArray = [
  { id: 'dash-default', icon: 'ChartPieSlice', label: 'Default', path: '/dashboard?dash-default' },
  { id: 'dash-ecommerce', icon: 'ShoppingBagOpen', label: 'eCommerce', path: '/dashboard?dash-e-commerce' },
  { id: 'dash-projects', icon: 'FolderNotch', label: 'Projects', path: '/dashboard?dash-projects' },
  { id: 'dash-online', icon: 'BookOpen', label: 'Online Courses', path: '/dashboard?dash-online-courses' },
];

const pagesArray = [
  {
    id: 'page-user-profile',
    icon: 'IdentificationBadge',
    label: 'User Profile',
    path: '/dashboard?user-profile',
    submenu: [
      { id: 'user-overview', label: 'Overview', path: '/dashboard?user-profile/overview' },
      { id: 'user-projects', label: 'Projects', path: '/dashboard?user-profile/projects' },
      { id: 'user-campaigns', label: 'Campaigns', path: '/dashboard?user-profile/campaigns' },
      { id: 'user-docs', label: 'Documents', path: '/dashboard?user-profile/documents' },
      { id: 'user-followers', label: 'Followers', path: '/dashboard?user-profile/followers' },
    ],
  },
  {
    id: 'page-account',
    icon: 'IdentificationCard',
    label: 'Account',
    path: '/dashboard?account',
    submenu: [
      { id: 'account-overview', label: 'Overview', path: '/dashboard?account/overview' },
      { id: 'account-projects', label: 'Projects', path: '/dashboard?account/projects' },
      { id: 'account-campaigns', label: 'Campaigns', path: '/dashboard?account/campaigns' },
      { id: 'account-docs', label: 'Documents', path: '/dashboard?account/documents' },
      { id: 'account-followers', label: 'Followers', path: '/dashboard?account/followers' },
    ],
  },
  {
    id: 'page-blog',
    icon: 'Notebook',
    label: 'Blog',
    path: '/dashboard?blog',
    submenu: [
      { id: 'blog-overview', label: 'Overview', path: '/dashboard?blog/overview' },
      { id: 'blog-projects', label: 'Projects', path: '/dashboard?blog/projects' },
      { id: 'blog-campaigns', label: 'Campaigns', path: '/dashboard?blog/campaigns' },
      { id: 'blog-docs', label: 'Documents', path: '/dashboard?blog/documents' },
      { id: 'blog-followers', label: 'Followers', path: '/dashboard?blog/followers' },
    ],
  },
  {
    id: 'page-social',
    icon: 'ChatsTeardrop',
    label: 'Social',
    path: '/dashboard?social',
    submenu: [
      { id: 'social-overview', label: 'Overview', path: '/dashboard?social/overview' },
      { id: 'social-projects', label: 'Projects', path: '/dashboard?social/projects' },
      { id: 'social-campaigns', label: 'Campaigns', path: '/dashboard?social/campaigns' },
      { id: 'social-docs', label: 'Documents', path: '/dashboard?social/documents' },
      { id: 'social-followers', label: 'Followers', path: '/dashboard?social/followers' },
    ],
  },
];




const LeftSidebar = ({ isOpen, username, setBreadCrumPath }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).toString(); // "dash-e-commerce"
  
  // build map from path/query to id
  const pathToIdMap = {};
  
  // favourites
  favouritesArray.forEach(item => pathToIdMap[item.path.split("?")[1]] = item.id);
  
  // dashboards
  dashboardArray.forEach(item => pathToIdMap[item.path.split("?")[1]] = item.id);
  
  // pages and submenus
  pagesArray.forEach(page => {
    pathToIdMap[page.path.split("?")[1]] = page.id;
    page.submenu?.forEach(sub => {
      pathToIdMap[sub.path.split("?")[1]] = sub.id;
    });
  });
  
  // initialize activeId based on queryParam
  const [activeId, setActiveId] = useState(() => pathToIdMap[queryParam] || null);
  
  // auto-expand parent menus if a submenu is active
  useEffect(() => {
    pagesArray.forEach(page => {
      if (page.submenu?.some(sub => sub.id === activeId)) {
        setExpanded(prev => ({ ...prev, [page.id]: true }));
      }
    });
  }, [activeId]);


 

  const renderFavourites = (parentlabel, items) => (
    <div className="menu-section">
      {items.map((item) => (
        <div
          key={item.id}
          className={`menu-item ${activeId === item.id ? 'active' : ''}`}
          onClick={() => {
            setActiveId(item.id);
            navigate(item.path);
            setBreadCrumPath([
              {label: parentlabel},
              { label: item.label, link: item.path }
            ]);
          }}
        >
          <Icon name="Dot" alt="dot" className="pointer" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );

  const renderMenu = (parentLabel, items) => (
    <div className="menu-section">
      {items.map((item) => (
        <div key={item.id}>
          <div
            className={`menu-item ${activeId === item.id ? 'active' : ''}`}
            onClick={() =>
               item.submenu
                 ? toggleExpand(item.id)
                 : (setActiveId(item.id),
                    navigate(item.path),
                    setBreadCrumPath([
                      {label: parentLabel},
                      { label: item.label, link: item.path }
                    ])
                )
            }
          >
            <Icon
              name={expanded[item.id] ? 'ArrowLineDown' : 'ArrowLineRight'}
              alt="arrow"
              className="pointer"
            />
            {item.icon && <Icon name={item.icon} alt={item.label} className="icon" />}
            <span>{item.label}</span>
          </div>

          {item.submenu && expanded[item.id] && (
            <div className="submenu">
              {item.submenu.map((sub) => (
                <div
                  key={sub.id}
                  className={`submenu-item ${activeId === sub.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveId(sub.id);
                    navigate(sub.path);
                    setBreadCrumPath([
                      {label: parentLabel},
                      { label: sub.label, link: sub.path}
                    ])
                  }}
                >
                  <span>{sub.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`left-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="user">
        <div className="avatar">
          <img src={ByeWind} alt="avatar" />
        </div>
        <div className="username">{username}</div>
      </div>

      <div className="favourites">
        <div className="header">
          <h4>Favorites</h4> <h4>Recently</h4>
        </div>
        {renderFavourites('Favorite', favouritesArray)}
      </div>

      <div className="dashboard">
        <h4>Dashboards</h4>
        {renderMenu('Dashboards', dashboardArray)}
      </div>

      <div className="pages">
        <h4>Pages</h4>
        {renderMenu('Pages', pagesArray)}
      </div>
    </div>
  );
};

export default LeftSidebar;
