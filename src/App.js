import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

/**
 * We have four components with <Calculator /> being the parent of all and ofcourse <App /> being the main
 * Components - Calculator, Display, Keypad, Keys
 * We begin by adding the first failing test (red) for the App component, and then write the code for it to pass (green).
 */

function App() {
  return (
    <div className="app-container">
      {/* 
          This is the main UI stateful component for our app. 
          It renders the Display and Keypad components and houses all app functions as well as the app's state. 
      */}
      <Calculator />
    </div>
  );
}

export default App;
