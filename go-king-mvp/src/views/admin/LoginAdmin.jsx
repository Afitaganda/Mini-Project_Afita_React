import React, { useState} from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = { username: 'admin', password: 'password123' };
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      navigate("/list-course")
    } else if (
      username === admin.username &&
      password === admin.password
    ) {
      localStorage.setItem('user', JSON.stringify(admin));
      localStorage.setItem('isLoggedIn', true);
    } else {
      Swal.fire({
        icon: "error",
        text: "Login error. Please try again"
      });
    }
  };
  return (
    <div className="container bg-emerald-100 mx-auto h-screen flex justify-center items-center">
      <div className="bg-white md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Login"
              className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:outline cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginAdmin