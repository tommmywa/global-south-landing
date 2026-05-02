import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ExperienceSection from './components/ExperienceSection';
import PackagesSection from './components/PackagesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <FeaturesSection />
      <ExperienceSection />
      <PackagesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}

export default App;
