import React, { useContext, useState, useEffect } from 'react';
import "./OrderList.scss";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeContext } from "../../context/ThemeContext";

const OrderList = ({orders = []}) => {
  const {dark} = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedOrders, setSortedOrders] = useState(orders);
  const [sortAsc, setSortAsc] = useState(true);

  const ordersPerPage = 10;
  
  const statusArray = [
    { type: "in_progress", name: "In Progress", color: dark ? "#8A8CD9" : "#95A4FC" },
    { type: "complete", name: "Complete", color: dark ? "#4AA785" : "#4AA785" },
    { type: "pending", name: "Pending", color: dark ? "#59A8D4" : "#59A8D4" },
    { type: "approved", name: "Approved", color: dark ? "#FFC555" : "#FFC555" },
    { type: "rejected", name: "Rejected", color: dark ? "#FFFFFF66" : "#1C1C1C66" },
  ];

  const statusOrder = ["complete", "in_progress",  "approved", "pending", "rejected"];

  
  const getStatusInfo = (type) => statusArray.find((s) => s.type === type) || { name: type, color: dark ? "#fff" : "#000" };




useEffect(() => {
  setCurrentPage(1);
}, [searchTerm]);
  
  const filteredOrders = sortedOrders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  );
  



  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };
  
  return (
    <div className="order-list">
      <div className="title">
        Order List
      </div>
      <div className="order-toolbar">
        <div className="icons">
          <Icon name="Add"/>
          <Icon
          name="FunnelSimple"
          onClick={() => {
            const sorted = [...sortedOrders].sort((a, b) => 
              sortAsc 
                ? a.date.localeCompare(b.date)
                : b.date.localeCompare(a.date)
            );
            setSortedOrders(sorted);
            setSortAsc(!sortAsc); 
          }}
        />

          <Icon 
          name="ArrowsDownUp"
          onClick={() => {
            const sorted = [...sortedOrders].sort((a, b) => {
              const indexA = statusOrder.indexOf(a.status_type);
              const indexB = statusOrder.indexOf(b.status_type);
              return sortAsc ? indexA - indexB : indexB - indexA;
            });
            setSortedOrders(sorted);
            setSortAsc(!sortAsc);
          }}
          />
        </div>
        <SearchBar
          hotkey=""
          height={20}
          placeholder="Search orders..."
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      
      <div className="order-header">
        <div><input type="checkbox" disabled /></div>
        <div>Order ID</div>
        <div>User</div>
        <div>Project</div>
        <div>Address</div>
        <div>Date</div>
        <div>Status</div>
      </div>
      
      {currentOrders.map((order, idx) => {
        const statusInfo = getStatusInfo(order.status_type)
        return (
          <div className="order-row" key={idx}>
            <div>
              <input
                type="checkbox"
                style={{ accentColor: dark ? "#C6C7F8" : "#000" , borderRadius: '50%', cursor:'pointer'}}
              />
            </div>
            <div>{order.id}</div>
            <div className="user-cell">
              <img src={order.user.avatar} alt={order.user.name} width={20} height={20}/>
              <span>{order.user.name}</span>
            </div>
            <div className='project'>{order.project}</div>
            <div>{order.address}</div>
            <div className="date">
              <Icon name="CalendarBlank" width={20} height={20}/> 
              <div>{order.date}</div>
            </div>
            <div
              className="status"
              style={{ color: statusInfo.color, display: "flex", alignItems: "center" }}
            >
              <span
                className="color-dot"
                style={{
                  backgroundColor: statusInfo.color,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  marginRight: "6px",
                }}
              ></span>
              {statusInfo.name}
            </div>
          </div>
        )
      })}
      
      {totalPages > 1 && (
        <div className="pagination-footer">
          <div className="pagination">
            <button 
              className="pagination-btn"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{ 
                color: dark ? "#fff" : "#000",
                opacity: currentPage === 1 ? 0.5 : 1
              }}
            >
              &lt;
            </button>
            
            {generatePageNumbers().map((page, index) => (
              page === '...' ? (
                <span key={index} className="pagination-ellipsis" style={{ color: dark ? "#fff" : "#000" }}>
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                  style={{
                    color: dark ? "#fff" : "#000",
                    backgroundColor: currentPage === page ? (dark ? "#FFFFFF1A" : "#1C1C1C0D") : "transparent",
                  }}
                >
                  {page}
                </button>
              )
            ))}
            
            <button 
              className="pagination-btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{ 
                color: dark ? "#fff" : "#000",
                opacity: currentPage === totalPages ? 0.5 : 1
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;