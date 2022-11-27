import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTask } from "../../../logic/actions/TaskAction";
import { updateTaskDetails } from "../../../logic/services/TaskService";

const CheckInput = ({ object }) => {
  console.log(object);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(
    object.completed === "Completed" ? true : false
  );

  console.log(check);
  return (
    <div>
      <div className="modal-body">
        <div className="mb-3 form-check">
          <input
            checked={check}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => {
              updateTaskDetails(object._id, !check)
                .then((response) => {
                  dispatch(updateTask(response.data.data));

                  setCheck(!check);
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          ></input>
          <label className="form-check-label">{object.completed}</label>
        </div>
      </div>
    </div>
  );
};

export default CheckInput;
