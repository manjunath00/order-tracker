import {SIGN_OUT, SIGN_IN} from "../actions/types";

const initialState = {
  isSignedIn: null,
  userName: null,
  userId: null
};

/* eslint-disable */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const updatedStateOnSingIn = {...state, isSignedIn: true, ...action.payload};
      // console.log(updatedStateOnSingIn)
      return {...updatedStateOnSingIn}
      break;
    case SIGN_OUT:
      const updatedStateOnSingOut = {...state, isSignedIn: false, userName: null, userId: null};
      // console.log(updatedStateSingOut)
      return {...updatedStateOnSingOut}
      break;
  }

  return state;
};

export default authReducer;
