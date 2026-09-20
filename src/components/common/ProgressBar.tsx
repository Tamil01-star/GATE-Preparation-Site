import React from 'react';

interface ProgressBarProps {
  percentage: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  showLabel = true,
  size = 'md',
  className = '',
  label
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(percentage)));

  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  }[size];

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs font-medium mb-1 text-brand-dark dark:text-brand-accent">
          <span>{label || 'Progress'}</span>
          <span className="font-semibold">{clamped}%</span>
        </div>
      )}
      <div className={`w-full bg-brand-soft dark:bg-surface-borderDark rounded-full overflow-hidden ${heightClass}`}>
        <div
          className="bg-brand-primary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};
