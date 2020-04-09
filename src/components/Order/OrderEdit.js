import React, {useState} from "react";
import {connect} from "react-redux";
import Modal from "../common/Modal";
import {editOrder} from "../../actions/ordersActions";
import history from "../../history";

const OrderEdit = (props) => {
  const {
    id,
    customer_name,
    customer_email,
    product,
    quantity,
  } = props.order;
  const [name, setName] = useState(customer_name);
  const [email, setEmail] = useState(customer_email);
  const [productType, setProductType] = useState(product);
  const [newQuantity, setQuantity] = useState(quantity);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, quantity);
    setName("");
    setEmail("");
    setQuantity(0);
    const order = {
      id: id,
      customer_name: name,
      customer_email: email,
      product: productType,
      quantity: newQuantity,
    };
    props.editOrder(order);
    history.push("/"); 
  };

  return (
    <Modal>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <div>Name</div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <div>Email</div>

            <input
              type="email"
              placeholder="Your Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div>Product</div>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
              <option value="Product 4">Product 4</option>
            </select>
          </div>
          <div>
            <div>Quantity</div>

            <input
              type="number"
              value={newQuantity}
              placeholder="Any value"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  // console.log("From edit component ---------", state)
  return { order: state.orders.filter(order => order.id === id)[0]}
}

export default connect(mapStateToProps, {editOrder})(OrderEdit);
 