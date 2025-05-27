import React from 'react';
import MySVGDrawing from './MySVGDrawing';

function App() {
  return (
    <div className="App">
      <h1>Reactで描く図形</h1>
      <MySVGDrawing /> {/* MySVGDrawing コンポーネントを使用 */}
    </div>
  );
}

export default App;