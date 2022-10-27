import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { loginRoute } from "../../utils/APIRoutes";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            const { username, password } = values;
            const { data } = await axios.post(loginRoute, {
                username,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                console.log(data.user);
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );

                navigate("/messenger");
            }
        }
    };
    return (
        <>
            <div className="FormContainer">
                <form className="formLogin" onSubmit={(e) => handleSubmit(e)}>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>Chat</h1>
                    </div>
                    <input
                        className="inputLogin"
                        type="text"
                        placeholder="Username"
                        name="username"
                        min="3"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        className="inputLogin"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => handleChange(e)}
                    />
                    <button type="submit" className="buttonLogin">
                        Log In
                    </button>

                    <span className="spanLogin">
                        Don't have an account ?{" "}
                        <Link to="/register">Create One.</Link>
                    </span>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </>
    );
}
