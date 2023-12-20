/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import RegisterScreen from '../screen/register';
import LoginScreen from '../screen/login';
import ProfileScreen from '../screen/profile.screen';
import { AuthenticationContext } from '../auth/auth.context';
import MainScreen from '../screen/main.screen';

const Loading = () => {
  return <div>loading</div>;
};
function PrivateRoute(props: any) {
  const { component: Component, children, render, ...rest } = props;

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
  const history = useHistory();
  useEffect(() => {
    setTimeout(async () => {
      console.log('redirect');
      history.push('/login');
    }, 1000);
  }, []);
  return <> {loading ? <Loading /> : <> {children}</>}</>;
};

const RouterManager = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginScreen />
          </Route>

          <Route exact path="/register">
            <RegisterScreen />
          </Route>

          <Route exact path="/*">
            <LoginScreen />
          </Route>

          <Route exact path="/profile">
            <ProfileScreen />
          </Route>

          <Route exact path="/main">
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
