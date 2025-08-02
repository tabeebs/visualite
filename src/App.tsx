import React from 'react';
import Iridescence from './components/Iridescence';
import './App.css';

function App() {
  return (
    <div className="App">
      <Iridescence
        color={[0.8, 0, 0.2]}
        mouseReact={false}
        amplitude={0.1}
        speed={0.4}
      />
      <div className="content">
        {/* Your new content will go here */}
      </div>
    </div>
  );
}

export default App;
