"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation'; 
import { CircularProgress, Box } from '@mui/material'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userid");
    
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData); 
        setUser(parsedUser); 
      } catch (error) {
        console.error('Error parsing user data:', error);
        setUser(null); 
      }
    } else {
      setUser(null); 
      router.push("/landing");  // Redirect to landing if no user found
    }
  
    setLoading(false); 
  }, [router]);
  

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
