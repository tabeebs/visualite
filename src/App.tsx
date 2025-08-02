import React from 'react';
import DotGrid from './components/DotGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271e37"
          activeColor="#2417d9"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </div>
  );
}

export default App;
