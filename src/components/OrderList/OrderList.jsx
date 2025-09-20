import React, { useContext, useState } from 'react';
import "./OrderList.scss";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeContext } from "../../context/ThemeContext";

const OrderList = ({orders = []}) => {
  const {dark} = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  
  const statusArray = [
    { type: "in_progress", name: "In Progress", color: dark ? "#8A8CD9" : "#95A4FC" },
    { type: "complete", name: "Complete", color: dark ? "#4AA785" : "#4AA785" },
    { type: "pending", name: "Pending", color: dark ? "#59A8D4" : "#59A8D4" },
    { type: "approved", name: "Approved", color: dark ? "#FFC555" : "#FFC555" },
    { type: "rejected", name: "Rejected", color: dark ? "#FFFFFF66" : "#1C1C1C66" },
  ];
  
  const getStatusInfo = (type) => statusArray.find((s) => s.type === type) || { name: type, color: dark ? "#fff" : "#000" };
  
  // Pagination calculations
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);
  
  // Pagination handlers
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
  
  // Generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis logic
      if (currentPage <= 3) {
        // Show first 3 pages + ellipsis + last page
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page + ellipsis + last 4 pages
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };
  
  return (
    <div className="order-list">
      {/* Top row with icons + searchbar */}
      <div className="title">
        Order List
      </div>
      <div className="order-toolbar">
        <div className="icons">
          <Icon name="Add"/>
          <Icon name="FunnelSimple"/>
          <Icon name="ArrowsDownUp"/>
        </div>
       <SearchBar hotkey="" height={20}/>
      </div>
      
      {/* Header row */}
      <div className="order-header">
        <div><input type="checkbox" disabled /></div>
        <div>Order ID</div>
        <div>User</div>
        <div>Project</div>
        <div>Address</div>
        <div>Date</div>
        <div>Status</div>
      </div>
      
      {/* List rows */}
      {currentOrders.map((order, idx) => {
        const statusInfo = getStatusInfo(order.status_type)
        return (
          <div className="order-row" key={idx}>
            <div>
              <input
                type="checkbox"
                style={{ accentColor: dark ? "#C6C7F8" : "#000" , borderRadius: '50%'}}
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
      
      {/* Pagination Footer */}
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
                    backgroundColor: currentPage === page ? (dark ? "#8A8CD9" : "#95A4FC") : "transparent",
                    fontWeight: currentPage === page ? "bold" : "normal"
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