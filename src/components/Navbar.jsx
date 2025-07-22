import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


function NavBar({onToggle, onHomeClick,onServiceClick, onAboutClick, onContactClick}) {
const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

function handleToggle() {
// eslint-disable-next-line no-constant-condition
setToggle(!toggle ? true : false)
  onToggle();
};



  return (
 <nav style={{backgroundColor: !toggle? "white" : "black"}}>
    <div>
    <img src="/images/My-Logo transparent.png" height={50} alt="Dev-x logo" />
    </div>
    <div className="nav-links">
      <p onClick={onHomeClick}>Home</p>
       <p onClick={onServiceClick}>Services</p>
      <p onClick={onAboutClick}>About</p>
      <p onClick={onContactClick}>Contact</p>
       <div>
        <div className='nav-menu'
          style={styles.menuItem}
          onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon/>
          {isOpen && (
            <div style={styles.dropdown}>
                    <p onClick={onHomeClick} style={styles.dropdownItem}>Home</p>
                   <p onClick={onServiceClick} style={styles.dropdownItem} >Services</p>
                   <p onClick={onAboutClick} style={styles.dropdownItem}>About</p>
                 <p onClick={onContactClick} style={styles.dropdownItem}>Contact</p>
            </div>
          )}
        </div>
        </div>
       <Brightness4Icon variant="contained" className='nav-btn' onClick={handleToggle}/>
    </div>
 </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  menu: {
    display: 'flex',
    gap: '20px',
  },
  menuItem: {
    cursor: 'pointer',
    position: 'relative',
  },
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
  }
};

 export default NavBar;




