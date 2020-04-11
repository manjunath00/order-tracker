import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Modal from "../common/Modal";
import OrderForm from "../common/OrderForm";
import {editOrder} from "../../actions/ordersActions";
import history from "../../history";

const OrderEdit = ({order, editOrder}) => {
  const onSubmit = (order) => {
    editOrder(order);
    history.push("/orders");
  };

  return (
    <Modal>
      <OrderForm order={order} onSubmitOrder={onSubmit} />
    </Modal>
  );
};

OrderEdit.propTypes = {
  editOrder: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {order: state.orders.filter((order) => order.id === id)[0]};
};

export default connect(mapStateToProps, {editOrder})(OrderEdit);
