import React from "react";
import Modal from "../common/Modal";

function OrderDelete() {
  return (
    <Modal>
      <div>
        <div>Are you sure you want to delete this order ?</div>
        <div>
          <div>
            <button>Delete</button>
          </div>
          <div>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderDelete;
