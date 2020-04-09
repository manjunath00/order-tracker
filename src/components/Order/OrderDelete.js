import React from "react";
import {connect} from "react-redux";
import Modal from "../common/Modal";
import {deleteOrder} from "../../actions/ordersActions";
import history from "../../history";

function OrderDelete(props) {
  const goBack = () => {
    history.push("/")
  };

  const deleteOrder = () => {
    const id = props.match.params.id;
    props.deleteOrder(id);
    goBack();
  };

  return (
    <Modal onDismiss={() => history.push("/")}>
      <div>
        <div>Are you sure you want to delete this order ?</div>
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
