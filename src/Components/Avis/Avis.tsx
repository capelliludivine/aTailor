import React from 'react';
import './Avis.scss';

const Avis: React.FC = () => {
  return (
    <div className="avis-section">
      <div className="background">Avis</div>
      <div className="avis-list">
        <h2>{`"`}</h2>
        <h1>{`Je cherchais le meilleur rapport qualité/prix possible pour un costume. Et je l'ai trouvé !`}</h1>
        <h1>
          <strong>Benjamin, 31 ans</strong>
        </h1>
        <h1>Eure (27)</h1>
        <div className="arrow-container">
          <div className="arrow">{`<`}</div>
          <div className="arrow">{`>`}</div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
