import React from "react";

function OrdersListHeader({onSort}) {
  return (
    <div className="row order-header">
      <div>customer_name</div>
      <div>customer_email</div>
      <div>Product</div>
      <div className="order-quantity">
        <button onClick={() => onSort("quantity")}>Quantity</button>
      </div>
      <div></div>
    </div>
  );
}

export default OrdersListHeader;
