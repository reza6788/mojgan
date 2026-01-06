import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-body uppercase tracking-widest transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-secondary-light hover:bg-surface-light hover:text-primary border border-primary font-semibold shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_25px_rgba(197,160,89,0.4)]",
    outline: "bg-transparent text-gray-800 dark:text-gray-100 border border-gray-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary backdrop-blur-sm",
    ghost: "bg-transparent text-primary hover:text-primary-light underline-offset-4 hover:underline"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};