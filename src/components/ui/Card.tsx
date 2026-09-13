import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({
  children,
  className = '',
  onClick,
  hoverable = false,
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 p-6 shadow-sm';
  const hoverClasses = hoverable ? 'hover:shadow-md hover:border-gray-300 transition-shadow cursor-pointer' : '';

  const classes = [baseClasses, hoverClasses, className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <div className={`mb-4 pb-4 border-b border-gray-200 ${className}`}>{children}</div>;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return <div className={`pt-4 border-t border-gray-200 ${className}`}>{children}</div>;
}

export default Card;
