import React, {useState} from "react";
import Modal from "../common/Modal";

const OrderNew = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, quantity);
    setName("");
    setEmail("");
    setQuantity(0);
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

export default OrderNew;
