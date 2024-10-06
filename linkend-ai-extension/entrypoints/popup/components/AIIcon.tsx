import React from 'react';
import aiIconSvg from '../assets/ai-icon.svg';

interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-blue-500 rounded-full shadow-lg"
      onClick={() => {
        console.log('AIIcon clicked!'); // Debugging log
        onClick();
      }}
    >
      <img src={aiIconSvg} alt="AI" className="w-6 h-6" />
    </button>
  );
};

export default AIIcon;
