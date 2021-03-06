import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sortOrder} from "../../actions/ordersActions";

function OrdersListHeader({sortOrder}) {
  const [sortDirection, setsortDirection] = useState(true);

  const onClickForSort = (field) => {
    sortOrder(field, sortDirection);
    setsortDirection(!sortDirection);
  };

  return (
    <div className="row order-header">
      <div
        className="headerSortUp"
        onClick={() => onClickForSort("customer_name")}
      >
        customer_name
      </div>
      <div
        className="headerSortUp"
        onClick={() => onClickForSort("customer_email")}
      >
        customer_email
      </div>
      <div className="headerSortUp" onClick={() => onClickForSort("product")}>
        Product
      </div>
      <div onClick={() => onClickForSort("quantity")} className="headerSortUp">
        Quantity
      </div>
      <div></div>
    </div>
  );
}

OrdersListHeader.propTypes = {
  sortOrder: PropTypes.func.isRequired
}

export default connect(null, {sortOrder})(OrdersListHeader);
