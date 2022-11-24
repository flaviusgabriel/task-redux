import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../logic/actions/TaskAction";
import { updateTaskDetails } from "../../../../logic/services/TaskService";

const EditTaskModal = ({ object }) => {
  const dispatch = useDispatch();
  const [close, setClose] = useState(false);
  const [check, setCheck] = useState(object.completed ? true : false);
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
      >
        eDIT
      </button>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModal">
                Edit Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 form-check">
                <input
                  checked={check}
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={() => {
                    setCheck(!check);
                  }}
                ></input>
                <label className="form-check-label">Check me out</label>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary "
              data-bs-dismiss="modal"
              aria-label={close & "Close"}
              onClick={() => {
                updateTaskDetails(object._id, check)
                  .then((response) => {
                    dispatch(updateTask(response.data.data));

                    setTimeout(() => {
                      setClose(true);
                    }, 500);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
