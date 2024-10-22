import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [storedValues, setStoredValues] = useState([]);
  const [Applied,setapplied] = useState([]);
  return (
    <UserContext.Provider value={{ storedValues , setStoredValues , Applied, setapplied }}>
      {children}
    </UserContext.Provider>
  );
};
