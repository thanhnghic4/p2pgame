import { createContext } from 'react';

export type AuthenticationContextType = {
  isLogin: boolean;
  userProfile: any;
  setIsLogin: any;
  setUserProfile: any;
} | null;

export const AuthenticationContext =
  createContext<AuthenticationContextType>(null);
