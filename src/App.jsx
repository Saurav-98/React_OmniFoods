import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Hero from './sections/Hero/Hero';
import Header from './sections/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
