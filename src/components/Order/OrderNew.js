import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Modal from "../common/Modal";
import OrderForm from "../common/OrderForm";
import history from "../../history";
import {newOrder} from "../../actions/ordersActions";

const OrderNew = (props) => {
  const onSubmit = (order) => {
    props.newOrder(order);
    history.push("/orders");
  };

  return (
    <Modal>
      <OrderForm order={null} onSubmitOrder={onSubmit} />
    </Modal>
  );
};

OrderNew.propTypes = {
  newOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {newOrder})(OrderNew);
