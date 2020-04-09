import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";

const Modal = (props) => {
  console.log(props)
  return ReactDOM.createPortal(
    // <div className="modal" onClick={props.onDismiss}>
    <div className="modal" onClick={() => history.push('/')}>
      <div className="modal-body" onClick={(e) => e.stopPropagation() }>{props.children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
// export default withRouter(Modal);
