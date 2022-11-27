import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URI}/users`);
            const data = await res.json();
            return data;
        },
    });

    // const handleAddAdmin = (id, role) => {
    //     const updatedRole = { ...role };
    //     updatedRole = "Admin";
    //     fetch(`${process.env.REACT_APP_API_URI}users/admin/${id}`, {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(updatedRole),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         });
    // };

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
                                    <button className="btn btn-sm btn-error bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white">
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
