import React from "react";
import {connect} from "react-redux";
import {
  nextPage,
  prevPage,
  setItemsPerPage,
} from "../../actions/paginationActions";

const Pagination = ({
  pages,
  nextPage,
  prevPage,
  setItemsPerPage,
  totalItems,
}) => {
  const itemsPerPageArray = [2, 5, 10, 25, 50, 100];

  const totalPages = Math.ceil(totalItems / pages.itemsPerPage);

  const renderOptions = (setItemsPerPage) => {
    return (
      <div>
        <select
          onChange={(e) => setItemsPerPage(e.target.value)}
          value={pages.itemsPerPage}
        >
          {itemsPerPageArray.map((itemsPerPage, index) => {
            return (
              <option value={itemsPerPage} key={index}>
                {itemsPerPage}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  return (
    <div className="flex">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => prevPage(pages.currentPage)}
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          {pages.currentPage} of {totalPages}
        </li>

        <li className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => nextPage(pages.currentPage, totalPages)}
          >
            Next
          </a>
        </li>
      </ul>
      <div className="flex">
        {renderOptions(setItemsPerPage)}
        <div>Items per page</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {pages: state.pages};
};

export default connect(mapStateToProps, {nextPage, prevPage, setItemsPerPage})(
  Pagination
);
