import React from 'react';
import './IconSection.scss';
import IconItem from '../IconItem/IconItem';

const arrayIcons: { icon: string; description: string }[] = [
  { icon: 'approuve.png', description: 'Couturiers approuvés' },
  { icon: 'mesure.png', description: 'Prise de mesure guidée' },
  { icon: 'livraison.png', description: 'Livraison Express' },
  { icon: 'retouche.png', description: 'Assurance retouche' },
  { icon: 'dispo.png', description: 'Disponibilité 24/24h 7/7j' },
];

const IconSection: React.FC = () => {
  return (
    <div className="icon-section-content">
      <h1>La mode sur-mesure, équitable et accessible.</h1>
      <div className="icon-content">
        {arrayIcons.map((item, index) => (
          <IconItem
            key={index}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default IconSection;
