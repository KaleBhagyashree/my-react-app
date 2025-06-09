import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Counter />
        <p>
          This is a simple React app with CI/CD pipeline using GitHub Actions.
        </p>
      </main>
    </div>
  );
}

export default App;