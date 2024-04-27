import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const Signup = ({ setAuth }) => {
  const cookie = new Cookies();
  const [player, setPlayer] = useState({});
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const register = () => {
    if (player.name.length < 3) {
      setNameError('Name must be at least 3 characters long');
    }
    if (player.name.length > 6) {
      setNameError('Name must be at most 6 characters long');
    }
    else if (!emailRegex.test(player.email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setNameError('');
      setEmailError('');
      axios
        .post('https://zanzibar-5.onrender.com/signup', player)
        .then((res) => {
          if (res.data === 'fail') {
            window.alert('User already exists');
          } else {
            const { token, name, hashPass, email, uid } = res.data;
            cookie.set('token', token);
            cookie.set('uid', uid);
            cookie.set('name', name);
            cookie.set('email', email);
            cookie.set('pass', hashPass);
            setAuth(true);
          }
        })
        .catch((err) => {
          console.error('Error:', err);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="bg-gray-700 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
          Join the <span className="text-red-500">ZanziBar</span> Zone
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={player.name}
            onChange={(evt) => setPlayer({ ...player, name: evt.target.value })}
            minLength="3"
            required
          />
          {nameError && <p className="text-red-500 mt-1">{nameError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={player.email}
            onChange={(evt) => setPlayer({ ...player, email: evt.target.value })}
            minLength="6"
            required
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={player.pass}
            onChange={(evt) => setPlayer({ ...player, pass: evt.target.value })}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={register}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};