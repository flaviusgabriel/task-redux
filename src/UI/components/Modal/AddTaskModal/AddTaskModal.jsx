import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../logic/actions/TaskAction";
import { addTaskDetail } from "../../../../logic/services/TaskService";

const AddTaskModal = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [close, setClose] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Add Task
      </button>

      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h2 style={{ color: "black" }}>Add Task</h2>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary "
                data-bs-dismiss="modal"
                aria-label={close & "Close"}
                onClick={() => {
                  addTaskDetail(description)
                    .then((response) => {
                      dispatch(addTask(response.data.data));

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
    </div>
  );
};

export default AddTaskModal;
