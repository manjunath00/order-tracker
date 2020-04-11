import React, {useState} from "react";
import history from "../../history";

const OrderForm = (props) => {
  let id, customer_name, customer_email, product, quantity;

  id = props.order ? props.order.id : null;
  customer_name = props.order ? props.order.customer_name : null;
  customer_email = props.order ? props.order.customer_email : null;
  product = props.order ? props.order.product : null;
  quantity = props.order ? props.order.quantity : null;

  const [name, setName] = useState(customer_name);
  const [email, setEmail] = useState(customer_email);
  const [productType, setProductType] = useState(product);
  const [newQuantity, setQuantity] = useState(quantity);

  const onSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: id,
      customer_name: name,
      customer_email: email,
      product: productType,
      quantity: newQuantity,
    };
    props.onSubmitOrder(order);
    console.log(name, email, quantity);
    setQuantity(0);
    setName("");
    setEmail("");
    history.push("/orders");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div className="m-1">Name</div>
          <input
            type="text"
            placeholder="Your Name"
            className="m-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="m-1">Email</div>
          <input
            type="email"
            placeholder="Your Name"
            className="m-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="m-1">Product</div>
          <select
            value={productType}
            className="m-1"
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
            <option value="Product 4">Product 4</option>
          </select>
        </div>
        <div>
          <div className="m-1">Quantity</div>
          <input
            type="number"
            className="m-1"
            value={newQuantity}
            placeholder="Any value"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" className="btn btn-primary m-1" />
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
