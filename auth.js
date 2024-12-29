// This will work on the client-side

import { useEffect, useState } from "react";

export const useAuthToken = () => {
  const [token, setTokenState] = useState(null);

  console.log(token)
  useEffect(() => {
    const storedToken = getCookie('authToken');
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  const setToken = (newToken) => {
    if (newToken) {
      setCookie('authToken', newToken, 7); // Store token for 7 days
      setTokenState(newToken);
    }
  };

  const removeToken = () => {
    removeCookie('authToken');
    setTokenState(null);
  };

  const isTokenValid = () => {
    return token ? true : false;
  };

  return { token, setToken, removeToken, isTokenValid };
};

export const useUserId = () => {
  const [userId, setUserIdState] = useState(null);

  useEffect(() => {
    const storedUserId = getCookie('user_id');
    if (storedUserId) {
      setUserIdState(storedUserId);
    }
  }, []);

  const setUserId = (newUserId) => {
    setCookie('user_id', newUserId, 7);
    setUserIdState(newUserId);
  };

  const removeUserId = () => {
    removeCookie('user_id');
    setUserIdState(null);
  };

  return { userId, setUserId, removeUserId };
};

export const useUserType = () => {
  const [userType, setUserTypeState] = useState(null);

  useEffect(() => {
    const storedUserType = getCookie('user_type');
    if (storedUserType) {
      setUserTypeState(storedUserType);
    }
  }, []);

  const setUserType = (newUserType) => {
    setCookie('user_type', newUserType, 7);
    setUserTypeState(newUserType);
  };

  const removeUserType = () => {
    removeCookie('user_type');
    setUserTypeState(null);
  };

  return { userType, setUserType, removeUserType };
};

// Helper functions to manage cookies
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
