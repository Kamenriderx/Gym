// MyContextProvider.js
import  { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    session:false,
    token:""
  });

  return (
    <Context.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;