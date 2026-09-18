import React from 'react';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  options: RadioOption[];
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  name: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  error,
  hint,
  fullWidth = false,
  name,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const radioId = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={radioId}
              className={`flex items-center gap-2 cursor-pointer ${
                option.disabled ? 'opacity-50 cursor-not-allowed' : ''
              } ${error ? 'text-red-600' : 'text-gray-700'}`}
            >
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option.value}
                disabled={option.disabled}
                className={`
                  w-4 h-4 border-gray-300 text-brand-600
                  focus:ring-2 focus:ring-brand-500 focus:ring-offset-0
                  disabled:cursor-not-allowed
                  transition-all duration-200
                  ${className}
                `}
                {...props}
              />
              <span className="text-sm">{option.label}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <span className="text-xs text-red-600">{error}</span>
      )}
      {hint && !error && (
        <span className="text-xs text-gray-500">{hint}</span>
      )}
    </div>
  );
};
