import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../GlobalProvider";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";

const Login = () => {
  const { form, setForm, Luser, setLUser, setUserData, error, setError } =
    useContext(GlobalContext);

  let navigate = useNavigate();

  console.log(localStorage);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setLUser({
      ...Luser,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: Luser.email,
      password: Luser.password,
      errors: {},
    };
    setError(null);
    if (userData.email === null || userData.email === "") {
      setError("Please enter a valid email address");
    } else if (userData.password === null || userData.password === "") {
      setError("Please enter Password");
    }
    console.log(userData);
    setUserData(userData);
    loginUser(userData);

    if (localStorage.length === 1) {
      console.log("empty");
      navigate("/sheet/sheet", { replace: true });
    }
  };

  return (
    <>
      <div className="LoginPage">
        <p
          style={{
            width: "10%",
            height: "3px",
            marginLeft: "-490px",
            marginBottom: "20px",
            border: "1px solid black",
            backgroundColor: "black",
          }}
        ></p>

        <div className="">
          <h4 style={{ marginLeft: "-280px" }}>
            <b>Login</b> below
          </h4>
        </div>
        <form className="LoginForm" onSubmit={handleSubmit}>
          <input
            className="formInput"
            onChange={handleChange}
            value={Luser.email}
            id="email"
            type="email"
            placeholder="Email"
          />
          <br></br>
          <input
            className="formInput"
            onChange={handleChange}
            value={Luser.password}
            id="password"
            // error={errors.password}
            type="password"
            placeholder="Password"
          />
          <br></br>
          <p style={{ color: "red" }}>
            {error && (
              <>
                <small>{error}</small>
              </>
            )}
          </p>
          <div style={{ display: "flex", cursor: "pointer" }}>
            <p className="text_tag">
              Don't have an account?<br></br>
              <button
                value="register"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#5d6d7e",
                  border: "3px solid black",
                  borderRadius: "3px",
                  fontSize: "10px",
                  padding: "3px",
                }}
                onClick={(e) => setForm(e.target.value)}
              >
                Register
              </button>
            </p>
            <button className="formBtn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => (
//   console.log(state),
//   {
//     auth: state.auth,
//     errors: state.errors,
//   }
// );

// export default connect(mapStateToProps, { loginUser })(Login);
export default Login;