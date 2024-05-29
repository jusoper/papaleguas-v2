// EnviosContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const EnviosContext = createContext();

export const EnviosProvider = ({ children }) => {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    const fetchEnvios = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/produtos');
        setEnvios(response.data);
      } catch (error) {
        console.error('Erro ao buscar envios:', error);
      }
    };

    fetchEnvios();
  }, []);

  const addEnvio = (novoEnvio) => {
    setEnvios((prevEnvios) => [novoEnvio, ...prevEnvios]);
  };

  return (
    <EnviosContext.Provider value={{ envios, addEnvio }}>
      {children}
    </EnviosContext.Provider>
  );
};

export default EnviosContext;
