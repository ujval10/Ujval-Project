import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (isLogin) {
            console.log("Logging in with:", { email, password });
            // Call login API or AuthContext function
        } else {
            console.log("Signing up with:", { email, password });
            // Call signup API or AuthContext function
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-700">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Signup"}
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 border rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder={isLogin ? "Enter your password" : "Create a password"}
                        className="w-full p-2 border rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full p-2 border rounded-lg"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}
                    {isLogin && (
                        <div className="text-right text-sm text-green-500 cursor-pointer">
                            Forgot password?
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white p-2 rounded-lg text-lg font-semibold"
                    >
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </form>
                <div className="text-center mt-4">
                    {isLogin ? (
                        <p>
                            Don't have an account?
                            <span
                                className="text-green-600 cursor-pointer"
                                onClick={() => setIsLogin(false)}
                            >
                                Signup
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account?
                            <span
                                className="text-green-600 cursor-pointer"
                                onClick={() => setIsLogin(true)}
                            >
                                Login
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
