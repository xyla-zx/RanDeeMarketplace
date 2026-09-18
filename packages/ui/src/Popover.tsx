import React from 'react';

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  position = 'bottom',
  align = 'center',
  isOpen: controlledIsOpen,
  onOpenChange,
  className = '',
}) => {
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  
  const setIsOpen = (open: boolean) => {
    if (!isControlled) {
      setInternalIsOpen(open);
    }
    onOpenChange?.(open);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionStyles = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  const alignStyles = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  };

  return (
    <div ref={popoverRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      {isOpen && (
        <div
          className={`
            absolute z-50 min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200
            ${positionStyles[position]}
            ${alignStyles[align]}
            ${className}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};
