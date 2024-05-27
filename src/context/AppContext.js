//src\context\AppContext.js
import React, { createContext, useContext, useState, useRef } from "react";
import axios from "axios";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [peopleRepo, setPeopleRepo] = useState([]);
  const [thingRepo, setThingRepo] = useState([]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        peopleRepo,
        setPeopleRepo,
        thingRepo,
        setThingRepo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
