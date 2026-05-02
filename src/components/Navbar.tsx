import { Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#fleet">Our Fleet</a></li>
          <li><a href="#lodgings">Lodgings</a></li>
        </ul>

        <div className="navbar-logo">
          <div className="logo-circle">
            <span>GS</span>
          </div>
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
