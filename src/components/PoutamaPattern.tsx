import React from 'react';

interface PoutamaPatternProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

export const PoutamaPattern: React.FC<PoutamaPatternProps> = ({
  className = '',
  color = 'currentColor',
  size = 'md',
  opacity = 0.1,
}) => {
  const sizeMap = {
    sm: 120,
    md: 200,
    lg: 320,
  };

  const patternSize = sizeMap[size];

  return (
    <svg
      className={className}
      width={patternSize}
      height={patternSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Poutama stepped pattern - stairway to heaven */}
      <g fill={color}>
        {/* Base steps */}
        <rect x="20" y="160" width="20" height="20" />
        <rect x="40" y="140" width="20" height="40" />
        <rect x="60" y="120" width="20" height="60" />
        <rect x="80" y="100" width="20" height="80" />
        <rect x="100" y="80" width="20" height="100" />
        <rect x="120" y="60" width="20" height="120" />
        <rect x="140" y="40" width="20" height="140" />
        <rect x="160" y="20" width="20" height="160" />

        {/* Mirror pattern for symmetry */}
        <rect x="0" y="180" width="20" height="20" />
        <rect x="180" y="180" width="20" height="20" />
      </g>
    </svg>
  );
};

export const PoutamaBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Multiple Poutama patterns scattered across background */}
      <PoutamaPattern
        className="absolute top-10 left-10 text-iron-red rotate-12"
        size="lg"
        opacity={0.05}
      />
      <PoutamaPattern
        className="absolute bottom-20 right-20 text-limestone-green -rotate-12"
        size="md"
        opacity={0.08}
      />
      <PoutamaPattern
        className="absolute top-1/2 left-1/4 text-iron-red rotate-45"
        size="sm"
        opacity={0.06}
      />
      <PoutamaPattern
        className="absolute bottom-1/4 left-20 text-limestone-green rotate-90"
        size="md"
        opacity={0.04}
      />
    </div>
  );
};