import React from "react";
import Tabel from "../components/Tabel/Tabel";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
          <div className="col-md-4 d-flex align-items-center">
            <h1>My tasks</h1>
          </div>

          <div className="ol-md-4 justify-content-end  d-flex">
            <button className="btn btn-primary">Add task</button>
          </div>
        </div>
      </div>
      <Tabel />
    </div>
  );
};

export default HomePage;
