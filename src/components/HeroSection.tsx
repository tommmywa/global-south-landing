import Navbar from './Navbar';
import './HeroSection.css';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      
      <div className="hero-background">
        <img src="/hero.png" alt="Luxury car at stadium" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper animate-fade-in">
          <h1 className="hero-title">
            Travel With<br />Comfort
          </h1>
          
          <div className="hero-subtitle-box">
            <p>Luxury transport & premium stays for the world's biggest football stage</p>
            <div className="hero-actions">
              <button className="btn btn-primary">Book Your Slot</button>
              <a href="#packages" className="explore-link">
                Explore the Worldcup Packages <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
