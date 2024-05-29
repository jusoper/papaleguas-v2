// App.js
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { EnviosProvider } from './EnviosContext.js'; // Importe o EnviosProvider

const App = () => {
  return (
    <EnviosProvider>
      <Navigation />
    </EnviosProvider>
  );
};

export default App;
