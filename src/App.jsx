import './App.css';
import Hero from './sections/Hero/Hero';
import Header from './sections/Header/Header';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import Featured from './sections/Featured/Featured';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <HowItWorks />
      </main>
    </>
  );
}

export default App;
