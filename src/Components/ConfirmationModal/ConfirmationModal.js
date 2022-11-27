import React from "react";

const ConfirmationModal = ({ title, message, successAction, modalData }) => {
    return (
        <>
            <input
                type="checkbox"
                id="confirmation-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="">
                        <div className="grid grid-cols-2 gap-4">
                            <label
                                htmlFor="confirmation-modal"
                                className="btn btn-primary w-full"
                            >
                                Cancel
                            </label>
                            <label
                                htmlFor="confirmation-modal"
                                onClick={() => successAction(modalData)}
                                className="btn btn-error bg-gradient-to-r from-red-600 to-orange-600  text-white w-full"
                            >
                                Delete
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationModal;
