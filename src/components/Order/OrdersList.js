import React, {useState } from "react";
import data from "../../DummyData.json";
import Pagination from "../common/Pagination";

import OrdersListHeader from "./OrdersListHeader";
import OrderSingle from "./OrderSingle";
import OrderHeader from "./OrderHeader";

function OrdersList() {
  const [orders, setOrders] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);
  const [sortState, setSortState] = useState(true); 

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changeOrdersPerPage = (noOfOrders) => setOrdersPerPage(noOfOrders);

  const indexOfLastPost = currentPage * ordersPerPage;
  const indexOfFirstPost = indexOfLastPost - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const onSort = (field) => {
    console.log("Trying to sort");
    setSortState(!sortState);
    const multiply = sortState ? 1 : -1;
    const sortedOrder = [...orders].sort(
      (a, b) => a[field] * multiply + -1 * multiply * b[field]
    );
    setOrders(sortedOrder);
  };

  return (
    <div className="order-list">
      <OrderHeader />
      <OrdersListHeader onSort={onSort} />
      {currentOrders.map((item, index) => (
        <OrderSingle order={item} key={index} />
      ))}

      <Pagination
        ordersPerPage={ordersPerPage}
        currentPage={currentPage}
        paginate={paginate}
        changeOrderPerPage={changeOrdersPerPage}
      />
    </div>
  );
}

export default OrdersList;
