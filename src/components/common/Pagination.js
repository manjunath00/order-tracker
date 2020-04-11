import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
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

  const onNextPageClick = (e) => {
    nextPage(pages.currentPage, totalPages);
  };

  const onPrevPageClick = (e) => {
    prevPage(pages.currentPage);
  };

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
          <button
            className="page-link"
            onClick={(e) => onPrevPageClick(e)}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          {pages.currentPage} of {totalPages}
        </li>

        <li className="page-item">
          <button
            className="page-link"
            onClick={(e) => onNextPageClick(e)}
          >
            Next
          </button>
        </li>
      </ul>
      <div className="flex">
        {renderOptions(setItemsPerPage)}
        <div>Items per page</div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
  totalItems: PropTypes.number.isRequired,
  setItemsPerPage: PropTypes.func.isRequired

}
const mapStateToProps = (state) => {
  return {pages: state.pages};
};

export default connect(mapStateToProps, {nextPage, prevPage, setItemsPerPage})(
  Pagination
);
