import React from 'react';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const VARIANT_MAP: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-light text-white hover:text-primary border border-primary shadow-sm shadow-orange-100/50',
  outline:
    'bg-primary-light text-primary hover:text-white border border-primary-light shadow-primary-glow',
};

const SIZE_MAP: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs rounded-xl font-bold',
  md: 'px-5 py-3 text-sm rounded-lg font-bold',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center 
        transition-all duration-200 cursor-pointer 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANT_MAP[variant]}
        ${SIZE_MAP[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 rounded-full bg-current animate-pulse mr-2" />
      ) : null}
      {children}
    </button>
  );
};
