import './App.css';
import Hero from './sections/Hero/Hero';
import Header from './sections/Header/Header';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import Featured from './sections/Featured/Featured';
import Meals from './sections/Meals/Meals';
import Testimonials from './sections/Testimonials/Testimonials';
import Pricing from './sections/Pricing/Pricing';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}

export default App;
