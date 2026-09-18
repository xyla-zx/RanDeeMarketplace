import React from 'react';

interface NumberStepperProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  min?: number;
  max?: number;
  step?: number;
  size?: 'sm' | 'md' | 'lg';
}

export const NumberStepper: React.FC<NumberStepperProps> = ({
  label,
  error,
  hint,
  fullWidth = false,
  min,
  max,
  step = 1,
  size = 'md',
  className = '',
  id,
  value,
  onChange,
  ...props
}) => {
  const inputId = id || `stepper-${Math.random().toString(36).substr(2, 9)}`;
  const currentValue = typeof value === 'number' ? value : 0;

  const handleIncrement = () => {
    if (max !== undefined && currentValue >= max) return;
    const newValue = Math.min(currentValue + step, max ?? Infinity);
    const event = { target: { value: newValue.toString() } } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  };

  const handleDecrement = () => {
    if (min !== undefined && currentValue <= min) return;
    const newValue = Math.max(currentValue - step, min ?? -Infinity);
    const event = { target: { value: newValue.toString() } } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(event);
  };

  const sizeStyles = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className={`flex items-center border rounded-lg overflow-hidden ${error ? 'border-red-500' : 'border-gray-300'} ${sizeStyles[size]}`}>
        <button
          type="button"
          onClick={handleDecrement}
          disabled={min !== undefined && currentValue <= min}
          className="px-3 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-r border-gray-300"
          aria-label="Decrease value"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <input
          type="number"
          id={inputId}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className={`flex-grow w-full text-center border-none focus:outline-none focus:ring-0 text-gray-900 ${fullWidth ? '' : 'w-20'}`}
          {...props}
        />
        <button
          type="button"
          onClick={handleIncrement}
          disabled={max !== undefined && currentValue >= max}
          className="px-3 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-l border-gray-300"
          aria-label="Increase value"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
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
