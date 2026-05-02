import './ExperienceSection.css';
import { MapPin, Users, Shield } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="section experience-section dark-mode">
      <div className="container experience-container">
        
        <div className="experience-visual">
          <div className="map-wrapper">
            <img src="/map.png" alt="World Cup Host Cities Map" className="map-image" />
          </div>
        </div>

        <div className="experience-content">
          <div className="badge">WORLD CUP 2026</div>
          <h2>Your Complete World Cup Experience</h2>
          <p className="experience-desc">
            Be part of football history with our exclusive transportation and lodging packages. We handle every detail so you can focus on the excitement.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">16</span>
              <span className="stat-label">HOST CITIES</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">48</span>
              <span className="stat-label">TEAMS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">104</span>
              <span className="stat-label">MATCHES</span>
            </div>
          </div>

          <div className="features-list">
            <div className="feature-list-item">
              <div className="icon-box">
                <MapPin size={20} className="text-primary" />
              </div>
              <div className="feature-list-text">
                <h4>All Host Cities</h4>
                <p>Coverage across USA, Canada, and Mexico with local expertise in every venue city.</p>
              </div>
            </div>
            
            <div className="feature-list-item">
              <div className="icon-box">
                <Users size={20} className="text-primary" />
              </div>
              <div className="feature-list-text">
                <h4>Group Packages</h4>
                <p>Special rates for groups, corporate clients, and VIP experiences with dedicated support.</p>
              </div>
            </div>

            <div className="feature-list-item">
              <div className="icon-box">
                <Shield size={20} className="text-primary" />
              </div>
              <div className="feature-list-text">
                <h4>Premium Amenities</h4>
                <p>Complimentary refreshments, Wi-Fi, entertainment systems, and concierge services.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
