import React from "react";
import "./TopSelling.scss";

const TopSelling = ({
  header = "Top Selling Products",
  listArray = [],
}) => {
  return (
    <div className="top-selling">
      {/* Header */}
      <div className="top-selling-header">{header}</div>

      {/* Table Header */}
      <div className="top-selling-table-header">
        <div className="name">Name</div>
        <div className="price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="amount">Amount</div>
      </div>

      {/* Horizontal line */}
      <div className="top-selling-line" />

      {/* List */}
      <div className="top-selling-list">
        {listArray.map((item, index) => (
          <div key={index} className="top-selling-row">
            <div className="column name">{item.name}</div>
            <div className="column price">${item.price}</div>
            <div className="column quantity">{item.quantity}</div>
            <div className="column amount">${item.price * item.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
