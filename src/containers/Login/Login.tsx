import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { statusLoginSelector } from 'store/modules/Login/Login.selector';
import { loginRequest } from 'store/modules/Login/Login.slice';

const Login = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(statusLoginSelector);
  const handleLogin = () => {
    dispatch(loginRequest());
  };

  return (
    <div className="text-blue">
      This is Login page
      <br />
      <button className="bg-green text-white p-1 rounded-md" type="button" onClick={handleLogin}>
        Login
      </button>
      <br />
      <div>{isLogin ? 'Login' : 'Not yet login'}</div>
    </div>
  );
};

export default Login;
