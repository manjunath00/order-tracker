import { SIGN_IN, SIGN_OUT} from "./types";

export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: value
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: false
    }
}