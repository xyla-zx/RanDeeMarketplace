import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity animate-fade-in"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-background rounded-lg shadow-xl max-w-md w-full p-6 animate-scale">
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <button
                onClick={onClose}
                className="text-secondary hover:text-foreground transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Content */}
          <div className="mb-4">{children}</div>
          
          {/* Footer */}
          {footer && (
            <div className="flex justify-end space-x-2 pt-4 border-t border-border">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
