import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Modal from "../common/Modal";
import {deleteOrder} from "../../actions/ordersActions";
import history from "../../history";

function OrderDelete(props) {
  const id = props.match.params.id;
  const goBack = () => {
    history.push("/orders")
  };

  const deleteOrder = () => {
    props.deleteOrder(id);
    goBack();
  };

  return (
    <Modal onDismiss={() => history.push("/")}>
      <div className="m-1">
        <div>Are you sure you want to delete the order with id  <strong>{`${id}`}</strong></div>
        <div className="flex-se m-1">
          <div>
            <button className="btn btn-danger"onClick={() => deleteOrder()}>Delete</button>
          </div>
          <div>
            <button className="btn btn-info" onClick={() => goBack()}>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

OrderDelete.propTypes = {
  deleteOrder: PropTypes.func.isRequired
}


export default connect(null, {deleteOrder})(OrderDelete);
