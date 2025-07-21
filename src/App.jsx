import{ useRef } from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {

 const homeRef = useRef(null);
 const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


return <>
  <NavBar
        onHomeClick={() => scrollToSection(homeRef)}
        onServiceClick={() => scrollToSection(serviceRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      
      <section ref={homeRef}>
        <Hero/>
      </section>

  
      <section ref={serviceRef}>
        <Services/>
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={contactRef}>
       <Contact/>
      </section>



</>
}

export default App;