import ProfileFrom from "../../Form/ProfileFrom";

const EditDetailsModal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Details
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Your Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ProfileFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDetailsModal;
