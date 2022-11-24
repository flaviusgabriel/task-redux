import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import EditDetailsModal from "../Modal/EditDetailsModal/EditDetailsModal";

import "./profile-view-style.css";

const ProfileView = () => {
  const user = useSelector((state) => state.user);

  const { name, email, age, createdAt, updatedAt } = user;

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
        <div className="col-md-4 d-flex align-items-center">
          <h1>My Profile</h1>
        </div>

        <div className="ol-md-4 justify-content-end  d-flex">
          <EditDetailsModal />
        </div>
      </div>
      <div className="row align-items-md-stretch user-profile-details-container rounded-3">
        <div className="col-md-6">
          <div className="profilepic">
            <div>
              <Avatar />
              {/* <img
                  id="preview"
                  src={
                    image.length <= 0
                      ? createImageFromInitials(150, name, getRandomColor())
                      : image
                  }
                  alt="profile-pic"
                  style={{ width: 150, height: 150 }}
                /> */}
            </div>
            <div className="profilepic__content d-flex flex-row center-items">
              {/* <span className="profilepic__icon ">
                  <ion-icon name="create-outline"></ion-icon>
                </span>

                
                <input
                  type="file"
                  onChange={(e) => {
                    console.log(URL.createObjectURL(e.target.files[0]));
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <span
                  className="profilepic__icon"
                  onClick={() =>
                    deleteUserProfileImage().then(() => {
                      dispatch(removeUserProfileImage(""));
                      localStorage.removeItem("avatar");
                    })
                  }
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </span> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="h-100 p-5 ">
            <ul className="user-list-details list-unstyled mt-3 mb-4 display-6">
              <li className="mb-1">Name: {name}</li>
              <li className="mb-1">Email: {email}</li>
              <li className="mb-1">Age: {age}</li>
              <li className="mb-1">
                Created At:
                {new Date(createdAt).toLocaleDateString("en-US")}
              </li>
              <li className="mb-1">
                Updated At:
                {new Date(updatedAt).toLocaleDateString("en-US")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
