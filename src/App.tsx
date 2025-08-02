import React from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <FaultyTerminal
          scale={2}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={.015}
          pause={false}
          scanlineIntensity={.1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#ffd32a"
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={true}
          brightness={0.8}
        />
      </div>
    </div>
  );
}

export default App;
