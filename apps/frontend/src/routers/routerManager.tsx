import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../screen/login.screen';
import RegisterScreen from '../screen/register.screen';

const RouterManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={LoginScreen} />
        <Route path='/register' Component={RegisterScreen} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterManager;
