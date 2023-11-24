import React from 'react';
import './App.css';
import { AuthenticationProvider } from './auth/auth.provider';
import RouterManager from './routers/routerManager';

function App() {
  return (
    <AuthenticationProvider>
      <RouterManager />
    </AuthenticationProvider>
  );
}

export default App;
