import React, { createContext, useState, useEffect } from 'react';
import { getNextCookies } from '../../lib/helpers/getNextCookies';


//@ts-ignore
export const AuthContext = createContext();
export const AuthProvider = ({children, ctx}:any) => {
  const { username } = getNextCookies(ctx);
  return (
    <AuthContext.Provider value={{
      username: username
    }}>
      {children}
    </AuthContext.Provider>
  );
};