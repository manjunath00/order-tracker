import React from "react";
import {connect} from "react-redux";
import Pagination from "../common/Pagination";
import OrdersListHeader from "./OrdersListHeader";
import OrderSingle from "./OrderSingle";
import OrderHeader from "./OrderHeader";

function OrdersList(props) {
  const arrayStart = props.pages.arrayStartIndex;
  const arrayEnd = props.pages.arrayEndIndex;
  return (
    <div className="order-list">
      <OrderHeader />
      <OrdersListHeader />
      {props.orders.slice(arrayStart, arrayEnd).map((item, index) => (
        <OrderSingle order={item} key={index} />
      ))}

      <Pagination totalItems={props.orders.length} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {orders: state.orders, pages: state.pages};
};

export default connect(mapStateToProps, {})(OrdersList);
