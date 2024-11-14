import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'colored' | 'white';
}

export default function Logo({ className = "h-10 w-10", variant = 'colored' }: LogoProps) {
  const colors = variant === 'colored' ? {
    body: '#8B4513',
    bill: '#45B7A4',
    eyes: '#FFD700',
    tail: '#724010',
    furStroke: '#724010'
  } : {
    body: '#FFFFFF',
    bill: '#FFFFFF',
    eyes: '#FFFFFF',
    tail: '#FFFFFF',
    furStroke: '#FFFFFF'
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M25 50 C25 35 40 25 50 35 C60 25 75 35 75 50 C75 65 65 80 50 80 C35 80 25 65 25 50"
        fill={colors.body}
      />
      {/* Duck bill */}
      <path
        d="M40 45 C45 35 55 35 60 45 C55 55 45 55 40 45"
        fill={colors.bill}
      />
      {/* Eyes */}
      <circle cx="40" cy="40" r="3" fill={colors.eyes}/>
      <circle cx="60" cy="40" r="3" fill={colors.eyes}/>
      {/* Tail */}
      <path
        d="M75 50 C85 45 90 55 85 60 C80 65 75 60 75 50"
        fill={colors.tail}
      />
      {/* Feet */}
      <path
        d="M40 80 C45 85 50 80 45 75"
        fill={colors.bill}
      />
      <path
        d="M55 80 C60 85 65 80 60 75"
        fill={colors.bill}
      />
      {/* Fur texture */}
      <path
        d="M30 45 C35 40 40 42 45 40"
        fill="none"
        stroke={colors.furStroke}
        strokeWidth="1"
      />
      <path
        d="M55 40 C60 42 65 40 70 45"
        fill="none"
        stroke={colors.furStroke}
        strokeWidth="1"
      />
    </svg>
  );
}