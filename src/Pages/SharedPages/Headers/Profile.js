import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="w-[250px] p-6 shadow-lg rounded-xl bg-[#b7bdc0] border-4 border-primary text-primary mt-5">
                {user?.photoURL ? (
                    <img
                        src={user?.photoURL}
                        alt=""
                        className="w-28 h-28 mx-auto rounded-full border-2 border-primary p-1"
                    />
                ) : (
                    <div>
                        <FaUserTie className="w-28 h-28 mx-auto rounded-full border-2 border-primary p-1" />
                    </div>
                )}
                <div className="text-center divide-y-2 divide-primary ">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold">
                            {user?.displayName}
                        </h2>
                        <p className="text-sm">{user?.email}</p>
                    </div>
                    <div>
                        <button
                            onClick={handleLogOut}
                            className="btn btn-block btn-primary bg-gradient-to-r from-primary to-[#083f50] text-white mt-5 shadow-lg"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
