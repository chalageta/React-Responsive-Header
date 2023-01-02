import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


 const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div><nav className='navbar'>
   <h1 className="logo">Your Logo</h1>
    <ul className={isMobile?'nav-links-mobile':'nav-links'}
          onClick={()=>setIsMobile(false)}>

<Link to="/home" className='home'><li>Home</li></Link>
<Link to="/about" className='about'><li>About</li></Link>
<Link to="/skill" className='skill'><li>Portfolio</li></Link>
<Link to="/contact" className='contact'><li>Contact</li></Link>
<Link to="/signup" bsStyle="success"  className='signup' ><li>Sign Up</li></Link>
<Link to ="/" className="search"><li className="fas fa-search"></li></Link>

  </ul>
   </nav>
   <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
           {isMobile? <i className='fas fa-times'></i>:<i className='fas fa-bars' ></i>}
          </button>
   </div>
  );
};
export default Navbar;