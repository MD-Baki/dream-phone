import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authimg from "../../assets/login/Computer login-amico.png";
import { ImGoogle3 } from "react-icons/im";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const [createUserEmail, setCreateUserEmail] = useState("");
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        setSignUpError("");

        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully");

                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL,
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch((error) => console.log(error));
            })
            .catch((err) => {
                setSignUpError(err.message);
            });
    };

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignUp = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User Sign Up Successfully");
                saveUser(user.displayName, user.email);
                setCreateUserEmail(user.email);
            })
            .catch((err) => {});
    };

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(`${process.env.REACT_APP_API_URI}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setCreateUserEmail(email);
            });
    };

    if (token) {
        return navigate("/");
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
                            Sign Up
                        </h4>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleSignUp)}
                        className="px-8"
                    >
                        <div className="form-control">
                            <label className="label  font-bold text-secondary">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: "Required",
                                })}
                                type="text"
                                placeholder="Your Name"
                                className="input input-primary"
                            />
                            {errors.name && (
                                <p
                                    role="alert"
                                    className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                                >
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label  font-bold text-secondary">
                                <span className="label-text">Your Photo</span>
                            </label>

                            <input
                                {...register("photoURL", {
                                    required: "Required",
                                })}
                                type="url"
                                placeholder="Photo URL"
                                className="input input-primary"
                            />
                            {errors.photoURL && (
                                <p
                                    role="alert"
                                    className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                                >
                                    {errors.photoURL?.message}
                                </p>
                            )}
                        </div>
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
                                <span className="label-text">
                                    Type of Account
                                </span>
                            </label>
                            <select
                                {...register("role", { required: true })}
                                className="select select-primary w-full"
                            >
                                <option value="User">User</option>
                                <option value="Seller">Seller</option>
                            </select>
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
                                    // pattern: {
                                    //     value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                                    //     message: "Password must be strong",
                                    // },
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
                            value="Sign Up"
                            className="btn btn-block btn-primary bg-gradient-to-r from-primary to-[#083f50] text-white mt-5 shadow-lg"
                        />
                        <p className="text-sm text-center text-red-600 font-bold pt-2">
                            {signUpError}
                        </p>
                    </form>
                    <div className="px-8">
                        <div className="divider font-bold text-secondary">
                            OR
                        </div>
                        <button
                            onClick={handleGoogleSignUp}
                            className="btn btn-block btn-outline border-primary text-primary border-2 capitalize hover:bg-gradient-to-r from-primary to-[#083f50] hover:border-primary"
                        >
                            <ImGoogle3 className="text-lg mr-2" /> Google Sign
                            Up
                        </button>
                        <p className="text-lg font-light text-center pt-4 text-primary">
                            You have a account?{" "}
                            <Link to="/signIn" className="font-medium">
                                Go To Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
