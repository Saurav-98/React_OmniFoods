import './App.css';
import Hero from './sections/Hero/Hero';
import Header from './sections/Header/Header';
import HowItWorks from './sections/HowItWorks/HowItWorks';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;
