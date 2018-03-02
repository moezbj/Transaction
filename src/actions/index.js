import firebase from "firebase";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";

export const selectLibrary = libraryId => {
  return {
    type: "select_library",
    payload: libraryId
  };
};

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passWordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUSerSuccess(dispatch, user))
      .catch(() => {
        firebase.auth
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUSerSuccess(dispatch, user));
      })
      .catch(() => loginUserFail(dispatch));
  };
};

const loginUserFail = dispatch => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUSerSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
