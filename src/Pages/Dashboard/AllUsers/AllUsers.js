import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const {
        data: users = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URI}/users`);
            const data = await res.json();
            return data;
        },
    });

    const handleDeleteUser = (user) => {
        fetch(`${process.env.REACT_APP_API_URI}/users/${user._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} Deleted Successfully`);
                }
            });
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="px-5 py-10">
            <h2 className="text-2xl font-bold pb-4">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>User Type</th>
                            <th>Delete users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role ? <>{user.role}</> : <>User</>}
                                </td>
                                <td>
                                    {user?.role === "admin" ? (
                                        <button className="btn btn-sm btn-disabled text-xs">
                                            delete
                                        </button>
                                    ) : (
                                        <label
                                            onClick={() =>
                                                setDeletingUser(user)
                                            }
                                            htmlFor="confirmation-modal"
                                            className="btn btn-sm btn-error bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white"
                                        >
                                            delete
                                        </label>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingUser && (
                <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingUser.name}. It Cannot be undone`}
                    successAction={handleDeleteUser}
                    modalData={deletingUser}
                    action={"Delete"}
                ></ConfirmationModal>
            )}
        </div>
    );
};

export default AllUsers;
