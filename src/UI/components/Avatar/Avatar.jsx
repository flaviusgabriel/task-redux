import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addUserProfileImage,
  deleteUserProfileImage,
} from "../../../logic/services/AvatarService";
import {
  addUserProfileImage as addUserProfileImageAction,
  removeUserProfileImage,
} from "../../../logic/actions/AvatarAction";
import "../ProfileView/profile-view-style.css";
import CreateImageFromInitials from "../../utils/CreateImageFromInitials";
import GetRandomColor from "../../utils/GetRandomColor";
import "./avatar.css";

const Avatar = () => {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.avatar);

  const [image, setImage] = useState("");

  useEffect(() => {
    if (avatar !== "" || null) {
      setImage(avatar);

      console.log(image);
    }
  }, [avatar]);

  // profile image letters
  const user = useSelector((state) => state.user);
  const { name } = user;

  return (
    <div>
      <img
        src={`${image}`}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50px",
          borderWidth: "1px",
        }}
      />
      <input
        type={"file"}
        onChange={(e) => {
          addUserProfileImage(e.target).then((response) => {
            console.log(response);
            dispatch(addUserProfileImageAction(JSON.stringify(response.data)));
          });

          setImage(window.URL.createObjectURL(e.target.files[0]));
        }}
      />
      <div className="col-md-6">
        <div className="profilepic">
          <img
            id="preview"
            src={
              `${image}`.length <= 0
                ? CreateImageFromInitials(150, name, GetRandomColor())
                : `${image}`
            }
            alt="profile-pic"
            //style={{ width: 150, height: 150 }}
          />
        </div>
      </div>

      {/* <button onClick={() => dispatch(addUserProfileImageAction(image))}>
        Add Image
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          deleteUserProfileImage(image).then(() => {
            dispatch(removeUserProfileImage(""));
          })
        }
      >
        Delete Profile Image
      </button> */}
    </div>
  );
};

export default Avatar;

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

// const FileUpload = ({ files, setFiles, removeFile }) => {
//     const uploadHandler = (event) => {
//         const file = event.target.files[0]
//         if (!file) return
//         file.isUploading = true
//         setFiles([...files, file])
//         console.log(event.target.files[0])
//         // upload file
//         const formData = new FormData()
//         formData.append('newFile', file, file.name)
//         axios
//             .post('http://localhost:8080/upload', formData)
//             .then((res) => {
//                 file.isUploading = false
//                 setFiles([...files, file])
//             })
//             .catch((err) => {
//                 // inform the user
//                 console.error(err)
//                 removeFile(file.name)
//             })
//     }

//     return (
//         <>
//             <div
//                 className="p-4 flex flex-col justify-center items-center border-4 "
//                 style={{
//                     minWidth: '20rem',
//                     minHeight: '20rem',
//                     border: '3px dashed #cbd5e0',
//                     backgroundColor: '#edf2f7',
//                 }}
//             >
//                 {' '}
//                 <div className="flex w-full items-center justify-center bg-grey-lighter">
//                     <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-blue-800">
//                         <svg
//                             className="w-8 h-8"
//                             fill="currentColor"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                         >
//                             <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
//                         </svg>
//                         <span className="mt-2 text-base leading-normal">Select a file</span>
//                         <input type="file" className="hidden" onChange={uploadHandler}  />
//                     </label>
//                 </div>
//                 <p className="font-bold mt-4 mb-2">Supported files</p>
//                 <p className="text-sm">PDF, JPG, PNG</p>
//             </div>
//         </>
//     )
// }

// export default FileUpload
