import React from 'react';
import PostComponent from './PostComponent'; // PostComponent 임포트

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Posts</h1>
      </header>
      <PostComponent /> // PostComponent 사용
    </div>
  );
}

export default App;
