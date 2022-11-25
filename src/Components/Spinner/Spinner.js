import React from "react";

const Spinner = () => {
    return (
        <div className="py-80 grid justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    );
};

export default Spinner;
