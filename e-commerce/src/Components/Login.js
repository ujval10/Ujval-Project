import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }

        // For simplicity, hardcode a valid email and password
        if (email === "u@gmail.com" && password === "1") {
            onLogin(); // Call the onLogin function to update authentication state
            navigate("/"); // Redirect to the home page after successful login
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="ui container center" style={{ maxWidth: "400px", marginTop: "50px" }}>
            <h2>Login</h2>
            {error && <div className="ui negative message">{error}</div>}
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label>Show Password</label>
                    </div>
                </div>
                <button type="submit" className="ui button primary">
                    SIGN IN
                </button>
            </form>
            <div style={{ marginTop: "20px" }}>
                <Link to="/forgot-password">Forgot Username / Password?</Link>
            </div>
            <div style={{ marginTop: "10px" }}>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    );
};

export default Login;