import { Globe } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#fleet">Our Fleet</a></li>
          <li><a href="#lodgings">Lodgings</a></li>
        </ul>

        <div className="navbar-logo">
          <img src={logoSvg} alt="Global South Logo" className="logo-image" />
        </div>

        <div className="nav-actions">
          <div className="lang-selector">
            <Globe size={18} />
            <span>EN</span>
          </div>
          <button className="btn btn-primary">Book a Package</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
