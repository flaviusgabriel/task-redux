import React from "react";
import Avatar from "../components/Avatar/Avatar.jsx";
import ProfileFrom from "../components/Form/ProfileFrom.jsx";
import AddImageModal from "../components/Modal/AddImageModal/AddImageModal.jsx";
import ProfileView from "../components/ProfileView/ProfileView";

const ProfilePage = () => {
  return (
    <div style={{ height: "50%" }}>
      <ProfileView />

      {/* <ProfileFrom /> */}

      {/* <Avatar /> */}
    </div>
  );
};

export default ProfilePage;
