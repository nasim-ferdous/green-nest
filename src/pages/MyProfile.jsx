import React, { use, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser, updateProfileUser } = use(AuthContext);
  const nameRef = useRef(null);
  const photoRef = useRef(null);
  const handleUpdateNamePhoto = (e) => {
    e.preventDefault();

    updateProfileUser({
      displayName: nameRef.current.value,
      photoURL: photoRef.current.value,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: nameRef.current.value,
          photoURL: photoRef.current.value,
        });
      })
      .catch((error) => {
        toast.error(error.message);
        setUser(user);
      });
  };
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center py-10 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">My Profile</h2>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <img
            src={user?.photoURL || "https://img.icons8.com/office/40/user.png"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-green-300 shadow-md object-cover"
          />
          <p className="text-xl font-semibold text-green-800">
            {user?.displayName || "Update your name"}
          </p>

          <p className="text-green-600">{user?.email}</p>
        </div>

        <div className="border-t border-green-200 my-4"></div>

        <form onSubmit={handleUpdateNamePhoto}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              ref={nameRef}
              className="input w-full border-green-300"
              placeholder="Update your Name"
            />
            <label className="label">Photo</label>
            <input
              type="url"
              ref={photoRef}
              className="input w-full border-green-300"
              placeholder="Update your photo URL"
            />

            <button type="submit" className="btn bg-green-500 mt-4">
              Update Profile
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
