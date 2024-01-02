import React, { useEffect, useState } from 'react';
import './DressMaker.scss';
import Button from '../Button/Button';
import IconScroll from '../IconScroll/IconScroll';
import { useWindowSize } from '../../Helpers/Sizes';

const dressMakerIcons: string[] = [
  'couturier2.png',
  'couturier3.png',
  'couturier1.png',
];

const DressMaker: React.FC = () => {
  const [width] = useWindowSize();
  const isMobileOrTablet = width < 769;
  const [icons, setIcons] = useState<string[]>(
    isMobileOrTablet ? dressMakerIcons : []
  );

  useEffect(() => {
    if (!isMobileOrTablet) {
      setIcons(dressMakerIcons);
    }
  }, [isMobileOrTablet]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isMobileOrTablet) {
      const bottom =
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        e.currentTarget.clientHeight;
      if (bottom) {
        setIcons((prevIcons) => [...prevIcons, ...dressMakerIcons]);
      }
    }
  };

  console.log(width);
  return (
    <div className="dress-maker-section">
      <div className="dress-maker-text">
        <div>
          <strong>Découvrez nos couturiers</strong> et discutez avec eux.
        </div>
        <Button className="intro-section-button" text="Je crée mon vêtement" />
      </div>
      <div className="dress-maker-scroll">
        <div className="scroll-zone" onScroll={handleScroll}>
          {icons.map((icon, index) => (
            <img
              key={index}
              className="dress-maker-section-icon"
              src={`images/${icon}`}
              alt="couturier"
            />
          ))}
        </div>
        <IconScroll />
      </div>
    </div>
  );
};

export default DressMaker;
