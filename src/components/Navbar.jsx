
function NavBar({onHomeClick,onServiceClick, onAboutClick, onContactClick}) {
  return (
 <nav>
    <div>
    <img src="/images/My-Logo transparent.png" height={50} alt="Dev-x logo" />
    </div>
    <div className="nav-links">
      <p onClick={onHomeClick}>Home</p>
       <p onClick={onServiceClick}>Services</p>
      <p onClick={onAboutClick}>About</p>
      <p onClick={onContactClick}>Contact</p>
    </div>
 </nav>
  );
}

 export default NavBar;




