import React from "react";
import "./RightSidebar.scss";
import Icon from "../../components/Icon/Icon";

const RightSidebar = ({ isOpen, onToggle, result = [
  {
    title: "Notifications",
    data: [
      {
        type: "bug",
        time: "2 hours ago",
        title: "You have a bug that needs to be fixed."
      },
      {
        type: "Broadcast",
        time: "Today, 11:59 AM",
        title: "System update available."
      },
      {
        type: "message",
        time: "Yesterday",
        title: "You received a new message."
      },
      {
        type: "bug",
        time: "29 july 2025",
        title: "You have a bug that needs to be fixed."
      },
    ]
  },
  {
    title: "Activities",
    data: [
      {
        username:"Just Now",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        title: "Released a new version of the app."
      },
      {
        username: "59 Minutes ago",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        title: "Created a new project."
      },
      {
        username: "Yesterday, 12:25 PM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        title: "Updated the project documentation."
      }
    ]
  },
  {
    title: "Contacts",
    data: [
      {
        username: "David Guetta",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
      },
      {
        username: "Eve Tailor",
        avatar: "https://randomuser.me/api/portraits/women/21.jpg"
      },
      {
        username: "Frank Yankee",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg"
      },
      {
        username: "Amid Ansari",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        username: "Meemansa Verma",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg"
      },
      {
        username: "Honey Paaji",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg"
      }
    ]
  }
] }) => {
  return (
    <aside className={`right-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        {result.map((section, idx) => (
          <div className="section" key={idx}>
            <p>{section.title}</p>
            <div className="section-items">
              {section.data.map((item, index) => {
                if (section.title.toLowerCase() === "notifications") {
                  return (
                    <div className="notification-item" key={index}>
                      <Icon 
                      name={item.type == "bug" ? "BugBeetle" : item.type == "message" ? "User" : "Broadcast"} 
                      alt={item.type}
                      width={20}
                      height={20}
                      class = "noti-img" 
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
                    <div className="activity-item" key={index}>
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
                    <div className="contact-item" key={index}>
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
