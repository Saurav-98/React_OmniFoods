import './App.css';
import Hero from './sections/Hero/Hero';
import Header from './sections/Header/Header';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import Featured from './sections/Featured/Featured';
import Meals from './sections/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <HowItWorks />
        <Meals />
      </main>
    </>
  );
}

export default App;
