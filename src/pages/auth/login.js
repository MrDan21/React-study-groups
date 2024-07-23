import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/users/login/', {
        username,
        password,
      });
      // Supongamos que la respuesta contiene el token en response.data.token
      const { token } = response.data;

      // Almacenar el token en localStorage
      localStorage.setItem('authToken', token);

      Swal.fire({
        title: 'Success',
        text: 'Login successful!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirige al usuario a la página principal o a donde quieras después del login exitoso
        navigate('/');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Invalid credentials. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="mr-2 leading-tight"
            />
            <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-6">Don't have an account? <a href="/signup" className="text-indigo-500 font-semibold">Sign up</a></p>
      </div>
    </div>
  );
};
