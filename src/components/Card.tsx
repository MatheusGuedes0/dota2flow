import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={`bg-white rounded-lg shadow-md border p-6 hover:shadow-lg transition-shadow ${className}`}
  >
    {children}
  </div>
);

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<SectionProps> = ({ children, className = '' }) => (
  <div className={`text-xl font-semibold mb-4 ${className}`}>{children}</div>
);

export const CardContent: React.FC<SectionProps> = ({ children, className = '' }) => (
  <div className={`text-gray-700 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<SectionProps> = ({ children, className = '' }) => (
  <div className={`mt-4 text-sm text-gray-500 ${className}`}>{children}</div>
);
