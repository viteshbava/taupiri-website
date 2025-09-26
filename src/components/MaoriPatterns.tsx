import React from 'react';

interface PatternProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

// Poutama (stairway to heaven) pattern
export const PoutamaPattern: React.FC<PatternProps> = ({
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
      <g fill={color}>
        <rect x="20" y="160" width="20" height="20" />
        <rect x="40" y="140" width="20" height="40" />
        <rect x="60" y="120" width="20" height="60" />
        <rect x="80" y="100" width="20" height="80" />
        <rect x="100" y="80" width="20" height="100" />
        <rect x="120" y="60" width="20" height="120" />
        <rect x="140" y="40" width="20" height="140" />
        <rect x="160" y="20" width="20" height="160" />
      </g>
    </svg>
  );
};

// Niho Taniwha (teeth of taniwha) pattern - triangular teeth pattern
export const NihoTaniwhaPattern: React.FC<PatternProps> = ({
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
      <g fill={color}>
        {/* Row 1 */}
        <polygon points="20,60 30,40 40,60" />
        <polygon points="60,60 70,40 80,60" />
        <polygon points="100,60 110,40 120,60" />
        <polygon points="140,60 150,40 160,60" />

        {/* Row 2 - offset */}
        <polygon points="40,100 50,80 60,100" />
        <polygon points="80,100 90,80 100,100" />
        <polygon points="120,100 130,80 140,100" />

        {/* Row 3 */}
        <polygon points="20,140 30,120 40,140" />
        <polygon points="60,140 70,120 80,140" />
        <polygon points="100,140 110,120 120,140" />
        <polygon points="140,140 150,120 160,140" />
      </g>
    </svg>
  );
};

// Purapurawhetū (star seeds) pattern - crosses pattern
export const PurapurawhetuPattern: React.FC<PatternProps> = ({
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
      <g fill={color}>
        {/* Cross pattern grid */}
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <g key={`${row}-${col}`} transform={`translate(${20 + col * 32}, ${20 + row * 32})`}>
              <rect x="6" y="2" width="4" height="12" />
              <rect x="2" y="6" width="12" height="4" />
            </g>
          ))
        )}
      </g>
    </svg>
  );
};

// Koru-inspired pattern
export const KoruPattern: React.FC<PatternProps> = ({
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
      <g fill="none" stroke={color} strokeWidth="3">
        {/* Main koru spiral */}
        <path d="M 100 50 C 120 50, 140 70, 140 90 C 140 110, 120 130, 100 130 C 80 130, 60 110, 60 90 C 60 80, 70 70, 80 70 C 85 70, 90 75, 90 80" />

        {/* Smaller koru */}
        <path d="M 50 100 C 60 100, 70 110, 70 120 C 70 130, 60 140, 50 140 C 40 140, 30 130, 30 120 C 30 115, 35 110, 40 110 C 42.5 110, 45 112.5, 45 115" />

        {/* Another koru */}
        <path d="M 150 100 C 160 100, 170 110, 170 120 C 170 130, 160 140, 150 140 C 140 140, 130 130, 130 120 C 130 115, 135 110, 140 110 C 142.5 110, 145 112.5, 145 115" />
      </g>
    </svg>
  );
};

// Combined background with multiple patterns
export const MaoriPatternsBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Poutama patterns */}
      <PoutamaPattern
        className="absolute top-10 left-10 text-iron-red rotate-12"
        size="lg"
        opacity={0.04}
      />

      {/* Niho Taniwha patterns */}
      <NihoTaniwhaPattern
        className="absolute bottom-20 right-20 text-limestone-green -rotate-12"
        size="md"
        opacity={0.06}
      />

      {/* Purapurawhetū patterns */}
      <PurapurawhetuPattern
        className="absolute top-1/3 right-1/4 text-iron-red rotate-45"
        size="sm"
        opacity={0.03}
      />

      {/* Koru patterns */}
      <KoruPattern
        className="absolute bottom-1/3 left-1/4 text-limestone-green"
        size="md"
        opacity={0.05}
      />

      {/* Additional scattered patterns */}
      <PoutamaPattern
        className="absolute top-1/2 right-10 text-iron-red -rotate-6"
        size="sm"
        opacity={0.06}
      />
    </div>
  );
};