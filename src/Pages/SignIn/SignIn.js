import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authimg from "../../assets/login/Computer login-amico.png";
// import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
// import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const SignIn = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (data) => {
        console.log(data);
        setLoginError("");

        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Login Successfully");
                setLoginUserEmail(data.email);
            })
            .catch((error) => {
                console.error(error);
                setLoginError(error.message);
            });
    };

    // const googleProvider = new GoogleAuthProvider();
    // const handleGoogleSignIn = () => {
    //     providerLogin(googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //             toast.success("User Sign In Successfully");
    //             setLoginUserEmail(user.email);
    //             // navigate(from, { replace: true });
    //         })
    //         .catch((err) => console.error(err));
    // };

    if (token) {
        return navigate(from, { replace: true });
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
            <img
                data-aos="zoom-out"
                data-aos-duration="1500"
                src={authimg}
                alt=""
            />
            <div className="w-11/12 lg:w-9/12 mx-auto">
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="bg-primary bg-opacity-30 py-10 rounded-xl shadow-lg"
                >
                    <div className="inline-block">
                        <h4 className="text-2xl font-medium uppercase text-white bg-gradient-to-r from-primary to-[#083f50] pl-9 py-2 pr-5 rounded-r-lg mb-5 shadow-lg">
                            Sign In
                        </h4>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleSignUp)}
                        className="px-8"
                    >
                        <div className="form-control">
                            <label className="label  font-bold text-secondary">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Required",
                                })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-primary"
                            />
                            {errors.email && (
                                <p
                                    role="alert"
                                    className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                                >
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label  font-bold text-secondary">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be 6 characters or longer",
                                    },
                                })}
                                type="password"
                                placeholder="••••••••"
                                className="input input-primary"
                            />
                            {errors.password && (
                                <p
                                    role="alert"
                                    className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                                >
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>

                        <input
                            type="submit"
                            value="Sign In"
                            className="btn btn-block btn-primary bg-gradient-to-r from-primary to-[#083f50] text-white mt-5 shadow-lg"
                        />
                        <p className="text-sm text-center text-red-600 font-bold pt-2">
                            {loginError}
                        </p>
                    </form>
                    <div className="px-8">
                        <div className="divider font-bold text-secondary">
                            OR
                        </div>

                        <p className="text-lg font-light text-center pt-4 text-primary">
                            New to Dream Phones?{" "}
                            <Link to="/signUp" className="font-medium">
                                Create new account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
