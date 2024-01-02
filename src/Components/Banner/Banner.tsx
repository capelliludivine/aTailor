import React from 'react';
import './Banner.scss';

interface BannerProps {
  message: string;
}

const Banner: React.FC<BannerProps> = ({ message }) => {
  return <div className="banner">{message}</div>;
};

export default Banner;
