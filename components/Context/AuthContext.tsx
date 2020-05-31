import React, { createContext, useState, useEffect } from 'react';
import { getNextCookies } from '../../lib/helpers/getNextCookies';

const defaultValues = {
  username: null
}

export const AuthContext = createContext(defaultValues);
export const AuthProvider = ({children, ctx}:any) => {
  const { username } = getNextCookies(ctx).username;
  return (
    <AuthContext.Provider value={{
      ...defaultValues,
      username
    }}>
      {children}
    </AuthContext.Provider>
  );
};