import React from "react";
import axios from "axios";

export const postFormData = (newData) => {
  axios
    .post("http://localhost:8000/ml/data/", newData)
    .then((res) => console.log(res));
};
// export const loginUser = (userData, history) => {
//   console.log(userData);
//   axios
//     .post("/api/users/login", userData)
//     .then((res) => {
//       const { token } = res.data;
//       console.log(res);
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       setCurrentUser(decoded);
//     })
//     .catch((err) => err);
// };
// export const loginUsr = (userData, history) => {
//   console.log(userData);
//   axios
//     .post("/api/users/login", userData)
//     .then((res) => {
//       const { token } = res.data;
//       console.log(res);
//       localStorage.setItem("jwtToken", token);
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       setCurrentUser(decoded);
//     })
//     .catch((err) => err);
// };
