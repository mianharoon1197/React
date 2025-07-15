import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
  return (
   <UserContextProvider>
    <h1 className='bg-amber-200 text-3xl text-center'>Hello Im Learning Context API's</h1>
    <Login />
    <Profile  />
   </UserContextProvider>
    
  );
}
