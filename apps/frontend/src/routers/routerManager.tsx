import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      // navigate('/login');
    }, 1000);
  }, []);
  return <> {loading ? <Loading /> : <> {children}</>}</>;
};

const RouterManager = () => {
  console.log('hello');
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' >
            <LoginScreen />
          </Route>

          <Route exact path='/register' >
            <RegisterScreen />
          </Route>

          <Route exact path='/*' >
            <ProfileScreen />
          </Route>

          <Route exact path='/main' >
            <PrivateScreen>
            <MainScreen />
            </PrivateScreen>
          </Route>

        </Switch>
      </Router>
    </>
  );
};

export default RouterManager;
