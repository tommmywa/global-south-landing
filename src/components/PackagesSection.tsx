import './PackagesSection.css';
import { Check } from 'lucide-react';

const PackagesSection = () => {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="packages-header">
          <div className="badge">WORLD CUP 2026</div>
          <h2>Our Worldcup Packages. <span className="text-muted">Designed for comfort, convenience, and unforgettable matchday moments.</span></h2>
        </div>

        <div className="packages-grid">
          {/* Card 1 */}
          <div className="package-card">
            <div className="package-info">
              <h3>Matchday Elite</h3>
              <p className="price">From $1500</p>
              <p className="package-desc">Travel to and from the stadium in complete comfort.</p>
              
              <ul className="feature-list">
                <li><Check size={16} className="text-primary" /> Private chauffeur service</li>
                <li><Check size={16} className="text-primary" /> On-time stadium drop-off & pickup</li>
                <li><Check size={16} className="text-primary" /> Priority routing on match days</li>
                <li><Check size={16} className="text-primary" /> Dedicated support</li>
              </ul>
            </div>
            <button className="btn btn-outline package-btn">Book Matchday Ride</button>
          </div>

          {/* Card 2 */}
          <div className="package-card">
            <div className="package-info">
              <h3>City Luxury Stay</h3>
              <p className="price">From $1500</p>
              <p className="package-desc">Stay in premium accommodations near the action.</p>
              
              <ul className="feature-list">
                <li><Check size={16} className="text-primary" /> 5-star lodge options</li>
                <li><Check size={16} className="text-primary" /> Flexible check-in & check-out</li>
                <li><Check size={16} className="text-primary" /> Concierge assistance</li>
                <li><Check size={16} className="text-primary" /> Prime locations</li>
              </ul>
            </div>
            <button className="btn btn-outline package-btn">Reserve Your Stay</button>
          </div>

          {/* Card 3 */}
          <div className="package-card premium-card">
            <div className="package-info">
              <div className="card-header-flex">
                <h3>Ultimate Experience</h3>
                <span className="badge-small">MOST POPULAR</span>
              </div>
              <p className="price">From $3500</p>
              <p className="package-desc">The complete World Cup experience, handled end-to-end.</p>
              
              <ul className="feature-list">
                <li><Check size={16} className="text-primary" /> Chauffeur service throughout your stay</li>
                <li><Check size={16} className="text-primary" /> Luxury accommodation</li>
                <li><Check size={16} className="text-primary" /> Personal concierge</li>
                <li><Check size={16} className="text-primary" /> Priority bookings</li>
              </ul>
            </div>
            <button className="btn btn-primary package-btn">Secure Full Experience</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
