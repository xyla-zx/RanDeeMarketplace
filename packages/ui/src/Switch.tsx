import React from 'react';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      <label 
        htmlFor={switchId}
        className={`flex items-center justify-between cursor-pointer ${error ? 'text-red-600' : 'text-gray-700'}`}
      >
        {label && (
          <span className="text-sm">{label}</span>
        )}
        <div className="relative">
          <input
            type="checkbox"
            id={switchId}
            className="sr-only peer"
            {...props}
          />
          <div className={`
            w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-500
            rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
            peer-checked:bg-brand-600
            disabled:opacity-50 disabled:cursor-not-allowed
          `}></div>
        </div>
      </label>
      {error && (
        <span className="text-xs text-red-600">{error}</span>
      )}
    </div>
  );
};
