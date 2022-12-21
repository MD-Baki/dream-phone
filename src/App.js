import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-center"
                theme="dark"
                autoClose={2000}
            />
        </>
    );
}

export default App;
