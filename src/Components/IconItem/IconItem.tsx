import React from 'react';
import './IconItem.scss';

interface IconItemProps {
  description: string;
  icon: string;
}

const IconItem: React.FC<IconItemProps> = ({ icon, description }) => {
  return (
    <div className="icon-item">
      <img src={`images/${icon}`} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default IconItem;
