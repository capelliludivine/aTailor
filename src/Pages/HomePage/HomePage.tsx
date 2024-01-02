import React from 'react';
import './HomePage.scss';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import IntroSection from '../../Components/IntroSection/IntroSection';
import IconSection from '../../Components/IconSection/IconSection';
import WhySection from '../../Components/WhySection/WhySection';
import DressMaker from '../../Components/DressMaker/DressMaker';
import ProfessionnalSection from '../../Components/ProfessionnalSection/ProfessionnalSection';
import Avis from '../../Components/Avis/Avis';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Banner message="Lorem ipsum dolor sit amet." />
      <div className="home-page-home">
        <Navbar />
        <IntroSection
          title="La mode sur-mesure, équitable et accessible."
          description="Lorem ipsum dolor sit amet. Ut sint cumque eum laborum vitae At
                 voluptatem quos qui exercitationem."
          buttonText="Je découvre les couturiers"
        />
      </div>
      <IconSection />
      <WhySection />
      <DressMaker />
      <ProfessionnalSection />
      <Avis />
    </div>
  );
};

export default HomePage;
