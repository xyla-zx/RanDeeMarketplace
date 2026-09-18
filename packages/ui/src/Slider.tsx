import React from 'react';

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  showValue?: boolean;
  valueLabel?: (value: number) => string;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  error,
  hint,
  fullWidth = false,
  showValue = false,
  valueLabel,
  className = '',
  id,
  min = 0,
  max = 100,
  step = 1,
  ...props
}) => {
  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;
  const currentValue = typeof props.value === 'number' ? props.value : min;

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
      {(label || (showValue && valueLabel)) && (
        <div className="flex justify-between items-center">
          {label && (
            <label htmlFor={sliderId} className="text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm font-medium text-gray-700">
              {valueLabel ? valueLabel(currentValue) : currentValue}
            </span>
          )}
        </div>
      )}
      <div className="relative w-full h-6 flex items-center">
        <input
          type="range"
          id={sliderId}
          min={min}
          max={max}
          step={step}
          className={`
            w-full absolute z-20 opacity-0 cursor-pointer
            ${className}
          `}
          {...props}
        />
        {/* Track */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
          {/* Progress */}
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {/* Thumb */}
        <div
          className="absolute w-5 h-5 bg-white border-2 border-brand-600 rounded-full shadow-md pointer-events-none transition-all duration-150 ease-out"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
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
