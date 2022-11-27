import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserProfileImage } from "../../../../logic/services/AvatarService";
import { addUserProfileImage as addUserProfileImageAction } from "../../../../logic/actions/AvatarAction";

const AddImageModal = () => {
  const avatar = useSelector((state) => state.avatar);
  const dispatch = useDispatch();
  const [image, setImage] = useState("ceva");
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#imageModal"
      >
        Add Image
      </button>

      <div
        className="modal fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
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
              <h2 style={{ color: "black" }}>Add Image</h2>
              <div className="mb-3">
                <div class="mb-3">
                  <label for="formFileSm" class="form-label">
                    Small file input example
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="image"
                    name="file"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setImage(e.target);
                    }}
                  ></input>
                </div>
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
                onClick={() => {
                  if (image === "ceva") {
                    console.error("Select an image!");
                  } else {
                    addUserProfileImage(image).then((response) => {
                      console.log(response);
                      dispatch(addUserProfileImageAction(!avatar));
                    });
                  }
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

export default AddImageModal;
