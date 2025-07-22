import{ useRef } from 'react';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { Button, CssBaseline, Container, Typography } from '@mui/material';
import useThemeContext from './useThemeContext';


function App() {
const { mode, toggleTheme } = useThemeContext();

 const homeRef = useRef(null);
 const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


return <div className='container'>
  <CssBaseline />
  <NavBar
        onHomeClick={() => scrollToSection(homeRef)}
        onServiceClick={() => scrollToSection(serviceRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onToggle={() => toggleTheme()}
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


</div>
}

export default App;