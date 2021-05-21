import React from 'react';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => (
  <AppContext.Provider value="Hello">{children}</AppContext.Provider>
);
