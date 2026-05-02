import './Footer.css';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Footer = () => {
  return (
    <footer className="footer dark-mode">
      <div className="footer-cta-section">
        <div className="footer-background">
          <img src={heroImg} alt="Luxury Car" className="footer-image" />
          <div className="footer-overlay"></div>
        </div>

        <div className="container footer-cta-content">
          <div className="cta-text">
            <h2>Secure Your World Cup Experience in Style.</h2>
            <p>Availability is limited during peak match periods. Book early to guarantee your preferred experience.</p>
            <div className="cta-actions">
              <button className="btn btn-primary">Book Your Slot</button>
              <a href="#packages" className="explore-link">
                Explore the Worldcup Packages <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>GLOBALSOUTH <span className="text-primary">LIMO</span></h3>
            <p className="brand-desc">Premium transportation and luxury accommodations for the discerning traveler.</p>
            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
              <a href="#">IN</a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Limousine Service</a></li>
              <li><a href="#">Airport Transfers</a></li>
              <li><a href="#">Corporate Travel</a></li>
              <li><a href="#">World Cup Packages</a></li>
              <li><a href="#">Luxury Lodging</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Fleet</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <address>
              <p>123 Luxury Avenue, Suite 500<br/>New York, NY 10001</p>
              <p className="contact-link"><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              <p className="contact-link"><a href="mailto:info@globalsouth.com">info@globalsouth.com</a></p>
            </address>
          </div>
        </div>

        <div className="container">
          <div className="footer-bottom">
            <p>&copy; 2026 GlobalSouth Limo. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
