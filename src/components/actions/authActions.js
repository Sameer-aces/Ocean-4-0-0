import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import { GlobalContext } from "../../GlobalProvider";

export const registerUser = (userData, history) => {
  console.log("yes", history);
  axios
    .post(
      "https://ocean-user-serverbackend.onrender.com/api/users/register",
      userData
    )
    .then((res) => alert("Registered Successfull pls Login"))
    .catch((err) => console.log(err));
};
//to get user token
export const loginUser = (userData, props) => {
  console.log(props);
  axios
    .post(
      "https://ocean-user-serverbackend.onrender.com/api/users/login",
      userData
    )
    .then((res) => {
      const { token } = res.data;
      console.log(res);
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded);
      setCurrentUser(decoded);
    })

    .catch((err) => {
      alert("Email or password invalid");
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  setCurrentUser({});
};
