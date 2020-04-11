import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Pagination from "../common/Pagination";
import OrdersListHeader from "./OrdersListHeader";
import OrderSingle from "./OrderSingle";
import OrderHeader from "./OrderHeader";

function OrdersList({orders, pages}) {
  const arrayStart = pages.arrayStartIndex;
  const arrayEnd = pages.arrayEndIndex;
  const ordersSliced = orders.slice(arrayStart, arrayEnd);
  return (
    <div className="order-list">
      <OrderHeader />
      <OrdersListHeader />
      {ordersSliced.map((item, index) => (
        <OrderSingle order={item} key={index} />
      ))}

      <Pagination totalItems={orders.length} />
    </div>
  );
}

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
  pages: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {orders: state.orders, pages: state.pages};
};

export default connect(mapStateToProps, {})(OrdersList);
