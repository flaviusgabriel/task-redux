import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../logic/actions/AuthActions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="text-center centered">
        <div className="form-signin w-100 m-auto">
          <div className="container py-5">
            <h1 className="mb-3 fw-normal">LOGIN SCREEN</h1>
            <div>
              <label className="form-label">Email address</label>
              <input
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email ..."
                type={"text"}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="form-label">Password</label>
              <input
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password ..."
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="btn btn-primary "
                onClick={() => {
                  dispatch(login(email, password));
                }}
              >
                Log In
              </button>
            </div>

            <div>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/signup")}
              >
                Register page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
