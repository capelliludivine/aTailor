import React from 'react';
import './IntroSection.scss';
import Button from '../Button/Button';

interface IntroSectionProps {
  buttonText: string;
  description: string;
  descriptionSecondLine?: string;
  descriptionThirdLine?: string;
  title: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  buttonText,
  description,
  descriptionSecondLine,
  descriptionThirdLine,
  title,
}) => {
  return (
    <div className="intro-section">
      <h1>{title}</h1>
      <div className="description-part">
        <p>{description}</p>
        {descriptionSecondLine && <p>{descriptionSecondLine}</p>}
        {descriptionThirdLine && <p>{descriptionThirdLine}</p>}
      </div>
      <Button className="intro-section-button" text={buttonText} />
    </div>
  );
};

export default IntroSection;
