import React, {useState} from "react";
import Modal from "../common/Modal";
import {v4 as uuidv4} from "uuid";
import {connect} from "react-redux";
import history from "../../history";
import {newOrder} from "../../actions/ordersActions";

const OrderNew = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault(); 
    const order = {
      id: uuidv4(),
      customer_name: name,
      customer_email: email,
      product: "Product 1",
      quantity: quantity,
    };
    props.newOrder(order);
    setName("");
    setEmail("");
    setQuantity(0);
    history.push("/orders");
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
            <select>
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
              value={quantity}
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

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, {newOrder})(OrderNew);
