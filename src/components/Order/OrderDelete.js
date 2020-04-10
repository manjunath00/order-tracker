import React from "react";
import {connect} from "react-redux";
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
      <div>
        <div>Are you sure you want to delete the order with id  <strong>{`${id}`}</strong></div>
        <div>
          <div>
            <button onClick={() => deleteOrder()}>Delete</button>
          </div>
          <div>
            <button onClick={() => goBack()}>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}


export default connect(null, {deleteOrder})(OrderDelete);
