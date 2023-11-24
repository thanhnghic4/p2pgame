import { createContext } from 'react';

export type AuthenticationContextType = {
  isLogin: boolean;
  userProfile: any;
  setIsLogin: any;
  setUserProfile: any;
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
  isLogin: false,
  userProfile: null,
  setIsLogin: null,
  setUserProfile: null,
});
