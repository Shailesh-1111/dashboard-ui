import React from "react";
import "./TopSelling.scss";

const TopSelling = ({
  header = "Top Selling Products",
  listArray = [],
}) => {
  return (
    <div className="top-selling">
      <div className="top-selling-header">{header}</div>

      <div className="top-selling-table-header">
        <div className="name">Name</div>
        <div className="price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="amount">Amount</div>
      </div>

      <div className="top-selling-line" />

      <div className="top-selling-list">
        {listArray.map((item, index) => (
          <div key={`top-selling-${index}-${item.name}`} className="top-selling-row">
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
