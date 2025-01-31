import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import loginImage from "../../assets/inventLogo.jpg";
import axios from 'axios'
import { AuthDataContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthDataContext) 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`, userData
    );

    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    }

    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-166">
      <div className="bg-white shadow-lg flex rounded-md">
      <div className="p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Login
          </button>
        </form>
        <p className='text-center mt-5'>New here? <Link to='/signup' className='text-blue-600'>Create an account</Link></p>
      </div>
      <div className="mt-12 mr-6">
              <img src={loginImage} alt="Signup" className="w-60 h-60 rounded-lg shadow-md" />
      </div>
      </div>
    </div>
  );
}

export default Login;
