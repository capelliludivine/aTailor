import React from 'react';
import './Button.scss'; // Assurez-vous de créer ce fichier SCSS pour les styles

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
