import './FeaturesSection.css';
import chauffeurImg from '../assets/chauffeur.png';
import hotelImg from '../assets/hotel.png';

const FeaturesSection = () => {
  return (
    <section className="section features-section" id="fleet">
      <div className="container features-container">
        <div className="features-text">
          <h2>For Those Who Expect More</h2>
          <p className="features-subtitle">
            Everything you need for an exceptional World Cup 2026 experience.
          </p>
        </div>
        
        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-card-content">
              <h3>Elite Transportation</h3>
              <p>Premium limousine and executive car services with professional chauffeurs. Ensure seamless travel to match venues, and luxury city tours safely.</p>
            </div>
            <div className="feature-image-wrapper">
              <img src={chauffeurImg} alt="Elite Transportation" className="feature-image" />
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-content">
              <h3>Premium Accommodations</h3>
              <p>Exclusive hotel packages for World Cup 2026. Stay in luxury hotels and private residences near stadiums and key matchday locations.</p>
            </div>
            <div className="feature-image-wrapper">
              <img src={hotelImg} alt="Premium Accommodations" className="feature-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
