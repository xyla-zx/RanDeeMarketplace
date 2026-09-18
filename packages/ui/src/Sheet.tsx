import React from 'react';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sideStyles = {
    left: 'left-0 top-0 h-full w-full border-r',
    right: 'right-0 top-0 h-full w-full border-l',
    top: 'top-0 left-0 w-full h-full border-b',
    bottom: 'bottom-0 left-0 w-full h-full border-t',
  };

  const sizeStyles = {
    sm: side === 'left' || side === 'right' ? 'max-w-sm' : 'max-h-sm',
    md: side === 'left' || side === 'right' ? 'max-w-md' : 'max-h-md',
    lg: side === 'left' || side === 'right' ? 'max-w-lg' : 'max-h-lg',
    full: 'max-w-full max-h-full',
  };

  const slideInStyles = {
    left: 'animate-in slide-in-from-left',
    right: 'animate-in slide-in-from-right',
    top: 'animate-in slide-in-from-top',
    bottom: 'animate-in slide-in-from-bottom',
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />
      
      {/* Sheet */}
      <div
        className={`
          absolute bg-white shadow-2xl ${sideStyles[side]} ${sizeStyles[size]}
          ${slideInStyles[side]} duration-300
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'sheet-title' : undefined}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            {title && (
              <h2 id="sheet-title" className="text-lg font-semibold text-gray-900">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close sheet"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4 overflow-y-auto h-[calc(100%-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
};
