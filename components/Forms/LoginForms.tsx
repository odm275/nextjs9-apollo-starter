import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cookie from 'js-cookie';
import { LOGIN_USER } from '../../lib/mutations/loginUser';
import Router from 'next/router'

const LoginForm = ({setLoginError, setLoginData, getAllFiles}: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: {
      input: {
        username,
        password: pwd,
      },
    },
    onCompleted: data => {
      console.log('data LOGIN_USER',data)
      cookie.set('token', data?.loginUser, {
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        expires: 6,
      });
      cookie.set('username', username);
      setLoginData(data);
      setIsLoggedIn(true);
      setLoginError(false);
      Router.push('/user')
    },
    onError: error => {
      console.log('error', error)
      setLoginError(error);
    },
  });
  useEffect(() => {
    setIsLoggedIn(cookie.get('token') ? true : false);
  }, []);

  const onSubmit = e => {
    console.log('submit login');
    e.preventDefault();
    loginUser();
  }

  return(
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="pwd"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          placeholder="******************"
        />
        <p className="text-red-500 text-xs italic">
          Please choose a password.
        </p>
      </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
      <a
        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </form>
  );
}

export default LoginForm