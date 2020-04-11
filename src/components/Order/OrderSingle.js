import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function OrderSingle({order}) {
  return (
    <div className="row order" id={order.id}>
      <div>{order.customer_name}</div>
      <div>{order.customer_email}</div>
      <div>{order.product}</div>
      <div className="order-quantity">{order.quantity}</div>
      <div>
        <Link to={{pathname: `/orders/edit/${order.id}`}}>Edit</Link>
      </div>
      <div>
        <Link to={{pathname: `/orders/delete/${order.id}`}}>Delete</Link>
      </div>
    </div>
  );
}

OrderSingle.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderSingle;
