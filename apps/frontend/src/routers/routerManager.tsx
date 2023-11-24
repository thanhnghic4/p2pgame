import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import LoginScreen from '../screen/login.screen';
import RegisterScreen from '../screen/register.screen';
import ProfileScreen from '../screen/profile.screen';
import {
  AuthenticationContext,
  AuthenticationContextType,
} from '../auth/auth.context';
import MainScreen from '../screen/main.screen';

const Loading = () => {
  return <div>loading</div>;
};
function PrivateRoute(props: any) {
  console.log('hello 2');
  let { component: Component, children, render, ...rest } = props;

  const [loading, setLoading] = useState(true);
  const { isLogin } = useContext(AuthenticationContext);

  console.log(loading);
  return (
    <Route {...rest} render={() => (loading ? <Loading /> : <Component />)} />
  );
}

const PrivateScreen = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const { isLogin, setIsLogin } = useContext(AuthenticationContext);
  console.log('private');
  useEffect(() => {
    setTimeout(async () => {
      console.log('redirect');
      redirect('/login');
    }, 1000);
  }, []);
  return <> {loading ? <Loading /> : <> {children}</>}</>;
};

const RouterManager = () => {
  console.log('hello');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={LoginScreen} />
          <Route path='/register' Component={RegisterScreen} />
          <Route path='/*' Component={ProfileScreen} />
          <Route
            path='/main'
            Component={() => {
              return (
                <PrivateScreen>
                  <MainScreen />
                </PrivateScreen>
              );
            }}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterManager;
