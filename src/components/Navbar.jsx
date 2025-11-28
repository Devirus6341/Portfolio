import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';

function NavBar({ onToggle, onHomeClick, onServiceClick, onAboutClick, onContactClick }) {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    onToggle();
  };

  return (
    <nav
      style={{
        backgroundColor: toggle ? "black" : "white",
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <div>
        <img src="/images/My-Logo transparent.png" height={50} alt="Dev-x logo" />
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div
          className="nav-links"
          style={{
            display: 'flex',
            gap: '25px',
            marginLeft: 'auto',
            alignItems: 'center',
          }}
        >
          <p onClick={onHomeClick} style={{ cursor: 'pointer' }}>Home</p>
          <p onClick={onServiceClick} style={{ cursor: 'pointer' }}>Services</p>
          <p onClick={onAboutClick} style={{ cursor: 'pointer' }}>About</p>
          <p onClick={onContactClick} style={{ cursor: 'pointer' }}>Contact</p>

          {/* Theme Toggle */}
          <Brightness4Icon
            onClick={handleToggle}
            style={{ cursor: 'pointer', fontSize: 28 }}
          />
        </div>
      )}

      {/* Mobile Hamburger + Toggle */}
      {isMobile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginLeft: 'auto', // push to right
          }}
        >
          {/* Hamburger */}
          <div
            className="nav-menu"
            style={{ cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon style={{ fontSize: 28 }} />
            {isOpen && (
              <div style={styles.dropdown}>
                <p onClick={onHomeClick} style={styles.dropdownItem}>Home</p>
                <p onClick={onServiceClick} style={styles.dropdownItem}>Services</p>
                <p onClick={onAboutClick} style={styles.dropdownItem}>About</p>
                <p onClick={onContactClick} style={styles.dropdownItem}>Contact</p>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <Brightness4Icon
            onClick={handleToggle}
            style={{ cursor: 'pointer', fontSize: 28 }}
          />
        </div>
      )}
    </nav>
  );
}

const styles = {
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '5px',
    zIndex: 1000,
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  },
};

export default NavBar;
