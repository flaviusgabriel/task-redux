import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../logic/actions/AuthActions";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  return (
    <div>
      <div className="text-center centered">
        <div className="form-signin w-100 m-auto">
          <div className="container py-5">
            <h1 className="mb-3 fw-normal">REGISTER SCREEN</h1>
            <div>
              <label className="form-label">Name</label>
              <input
                className="form-control"
                value={name}
                placeholder="Name ..."
                type={"text"}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="form-label">Email address</label>
              <input
                className="form-control"
                value={email}
                placeholder="Email ..."
                type={"text"}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="form-label">Password</label>
              <input
                className="form-control"
                value={password}
                placeholder="Password ..."
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label className="form-label">Age</label>
              <input
                className="form-control"
                value={age}
                placeholder="Age ..."
                type={"number"}
                onChange={(e) => setAge(e.target.value)}
              />

              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(register(age, email, name, password));
                }}
              >
                Register
              </button>
            </div>

            <div>
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Go to login page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
