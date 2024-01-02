import React from 'react';
import './WhySection.scss';
import IntroSection from '../IntroSection/IntroSection';

const WhySection: React.FC = () => {
  return (
    <div className="why-section">
      <div className="why-section-content">
        <img src={`images/pourquoi.png`} alt="pourquoi" />
        <IntroSection
          title="Pourquoi choisir Atailor ?"
          description="Dans de nombreux pays, on ne compte pas sur les chaînes de vêtements pour s'habiller. On contacte simplement un couturier et on lui demande de créer nos vêtements."
          descriptionSecondLine="En commandant directement auprès de couturiers on évite de nombreux coûts intermédiaires, on bénéficie du meilleur rapport qualité prix, on respecte le bien-être des ouvriers, chaque vêtement est unique et produit à la demande et nos vêtements sont sur-mesure."
          descriptionThirdLine="Alors, vous tentez l'expérience?"
          buttonText="Je découvre les couturiers"
        />{' '}
      </div>
    </div>
  );
};

export default WhySection;
