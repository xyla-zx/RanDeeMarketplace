import React from 'react';

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  underline?: 'always' | 'hover' | 'none';
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  variant = 'default',
  size = 'md',
  underline = 'hover',
  external = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded';
  
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  
  const variantStyles = {
    default: 'text-gray-700 hover:text-gray-900 focus:ring-gray-500',
    primary: 'text-brand-600 hover:text-brand-700 focus:ring-brand-500',
    secondary: 'text-gray-600 hover:text-gray-800 focus:ring-gray-500',
    danger: 'text-red-600 hover:text-red-700 focus:ring-red-500',
  };
  
  const underlineStyles = {
    always: 'underline',
    hover: 'hover:underline',
    none: 'no-underline',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${underlineStyles[underline]} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {external && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
};
