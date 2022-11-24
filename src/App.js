import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer position="top-center" theme="dark" />
        </>
    );
}

export default App;
