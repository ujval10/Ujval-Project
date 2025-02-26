import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-700">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Login" : "Signup"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                            required 
                        />
                    )}
                    {isLogin && (
                        <div className="text-right text-sm text-green-500 cursor-pointer">Forgot password?</div>
                    )}
                    <button 
                        type="submit" 
                        className="w-full bg-green-600 text-white p-2 rounded-lg text-lg font-semibold">
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </form>
                <div className="text-center mt-4">
                    {isLogin ? (
                        <p>
                            Don't have an account? 
                            <span 
                                className="text-green-600 cursor-pointer" 
                                onClick={() => setIsLogin(false)}>
                                Signup
                            </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account? 
                            <span 
                                className="text-green-600 cursor-pointer" 
                                onClick={() => setIsLogin(true)}>
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
