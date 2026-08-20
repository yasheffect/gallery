import React from 'react';

interface FirstLetterItalicProps {
  text: string;
  className?: string;
}

export const FirstLetterItalic: React.FC<FirstLetterItalicProps> = ({ text, className }) => {
  if (!text) return null;
  
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);
  
  return (
    <span className={className}>
      <span className="font-display-italic italic">{firstLetter}</span>
      {restOfText}
    </span>
  );
};
