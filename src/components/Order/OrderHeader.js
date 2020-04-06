import React from "react";
import {Link} from "react-router-dom";

function OrderHeader({noOfOrders, currentPage, totalPages}) {
  return (
    <div className="flex">
      <div>
        <div>
          Orders(<span className="bold">{noOfOrders}</span>){" "}
        </div>
        <div>
          Showing {currentPage} out of {totalPages} pages
        </div>
      </div>
      <div>
        <Link to={`/orders/new`}>Create New Order</Link>
      </div>
    </div>
  );
}

export default OrderHeader;
