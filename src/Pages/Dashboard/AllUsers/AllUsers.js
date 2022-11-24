import React from "react";

const AllUsers = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
