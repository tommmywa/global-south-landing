import './HowItWorksSection.css';

const HowItWorksSection = () => {
  return (
    <section className="section how-it-works-section dark-mode">
      <div className="container">
        <h2 className="how-it-works-title">
          How it works. <span className="text-muted-light">A seamless process from booking to arrival.</span>
        </h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-steps">
            
            <div className="timeline-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Choose Your Experience</h4>
                <p>Select the package you want.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Plan Your Itinerary</h4>
                <p>Pick your dates, cities, and match schedule.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Confirm Your Booking</h4>
                <p>Secure your plan in just a few steps.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Enjoy Your Experience</h4>
                <p>Arrive, relax, and focus on the matches that matter.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
