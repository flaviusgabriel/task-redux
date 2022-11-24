import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUserDetails } from "../../../logic/services/UserService";
import { addUserDetails } from "../../../logic/actions/UserAction";

import "./profile-form-style.css";

const ProfileFrom = () => {
  const user = useSelector((state) => state.user);
  const { name, email, age } = user;

  const dispatch = useDispatch();

  const [_email, setEmail] = useState("");
  const [_name, setName] = useState("");
  const [_age, setAge] = useState("");

  useEffect(() => {
    setAge(age);
    setName(name);
    setEmail(email);
  }, [user]);

  return (
    <div className="containerProfileForm">
      <label className="form-label">Name</label>
      <input
        className="form-control"
        value={_name}
        placeholder="Name ..."
        type={"text"}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="form-label">Email</label>
      <input
        className="form-control"
        value={_email}
        placeholder="Email ..."
        type={"text"}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="form-label">Age</label>
      <input
        className="form-control"
        value={_age}
        placeholder="Age ..."
        type={"number"}
        onChange={(e) => setAge(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={() => {
          updateUserDetails(_name, _email, Number(_age)).then((response) => {
            const data = response.data.data;

            setAge("");
            setEmail("");
            setName("");

            dispatch(addUserDetails(data));
          });
        }}
      >
        Edit Info
      </button>
    </div>
  );
};

export default ProfileFrom;
