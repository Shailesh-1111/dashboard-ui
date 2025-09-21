import React from "react";
import "./RightSidebar.scss";
import Icon from "../../components/Icon/Icon";
import { rightSidebarData } from "../../data/mockData";

const RightSidebar = ({ isOpen, onToggle, result = rightSidebarData }) => {
  return (
    <aside className={`right-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        {result.map((section, idx) => (
          <div className="section" key={`section-${idx}-${section.title}`}>
            <p>{section.title}</p>
            <div className="section-items">
              {section.data.map((item, index) => {
                if (section.title.toLowerCase() === "notifications") {
                  return (
                    <div className="notification-item" key={`notification-${index}-${item.type}`}>
                      <Icon 
                      name={item.type == "bug" ? "BugBeetle" : item.type == "message" ? "User" : "Broadcast"} 
                      alt={item.type}
                      width={20}
                      height={20}
                      className = "noti-img" 
                      />
                      <div className="notification-text">
                        <div className="title">{item.title}</div>
                        <div className="time">{item.time}</div>
                      </div>
                    </div>
                  );
                }

                if (section.title.toLowerCase() === "activities") {
                  return (
                    <div className="activity-item" key={`activity-${index}-${item.username}`}>
                      <img
                        src={item.avatar}
                        alt={item.username}
                        className="avatar"
                      />
                      <div className="activity-text">
                        <div className="title">{item.title}</div>
                        <div className="username">{item.username}</div>
                        <div className="time">{item.time}</div>
                      </div>
                    </div>
                  );
                }

                if (section.title.toLowerCase() === "contacts") {
                  return (
                    <div className="contact-item" key={`contact-${index}-${item.username}`}>
                      <img
                        src={item.avatar}
                        alt={item.username}
                        className="avatar"
                      />
                      <span className="username">{item.username}</span>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
