import React, { ReactNode } from 'react';
import { AuthenticationContext } from './auth.context';

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [userProfile, setUserProfile] = React.useState<any>({});

  return (
    <AuthenticationContext.Provider
      value={{
        isLogin,
        userProfile,
        setIsLogin,
        setUserProfile,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
