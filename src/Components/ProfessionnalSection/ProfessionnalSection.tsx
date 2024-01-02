import React from 'react';
import './ProfessionnalSection.scss';
import IntroSection from '../IntroSection/IntroSection';

const ProfessionnalSection: React.FC = () => {
  return (
    <div className="profesional-section">
        <IntroSection
          title="Vous êtes un Couturier Professionnel ?"
          description="Rejoignez le mouvement et développer votre activité !"
          buttonText="Je crée mon vêtement"
        />
    </div>
  );
};

export default ProfessionnalSection;
