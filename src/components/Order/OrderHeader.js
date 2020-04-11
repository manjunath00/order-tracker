import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function OrderHeader({noOfOrders}) {
  return (
    <div className="flex">
      <div>
        <div>
          Orders(<span className="bold"> {noOfOrders}</span>)
        </div>
      </div>
      <div>
        <Link to={`/orders/new`}>Create New Order</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfOrders: state.orders.length
  };
};

OrderHeader.propTypes = {
  noOfOrders: PropTypes.number.isRequired
}

export default connect(mapStateToProps, null)(OrderHeader);
