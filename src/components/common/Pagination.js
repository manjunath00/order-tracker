import React from "react";

const Pagination = ({
  ordersPerPage,
  currentPage,
  paginate,
  changeOrderPerPage,
}) => {
  const itemsPerPageArray = [5,10, 25, 50, 100];

  const generateItemsPerPage = (itemsPerPage) => {
    if (itemsPerPage === ordersPerPage) {
      return (
        <option value={itemsPerPage} selected>
          {itemsPerPage}
        </option>
      );
    }
    return <option value={itemsPerPage}>{itemsPerPage}</option>;
  };

  const onOrderPerPageChange = (e) => changeOrderPerPage(e.target.value);

  return (
    <div className="flex">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => paginate(currentPage)}
          >
            {currentPage}
          </a>
        </li>
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
      <div className="flex">
        <div>
          <select onChange={onOrderPerPageChange}>
            {itemsPerPageArray.map(generateItemsPerPage)}
          </select>
        </div>
        <div>Items per page</div>
      </div>
    </div>
  );
};

export default Pagination;
