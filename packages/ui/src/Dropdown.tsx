import React from 'react';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export function Dropdown({ 
  isOpen, 
  onClose, 
  anchorEl, 
  children,
  align = 'left'
}: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className={`absolute bg-background rounded-lg shadow-lg border border-border py-1 min-w-[160px] animate-scale ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        style={{
          top: anchorEl ? anchorEl.getBoundingClientRect().bottom + 8 : 'auto',
          left: anchorEl ? anchorEl.getBoundingClientRect().left : 'auto',
          right: align === 'right' && anchorEl ? `calc(100% - ${anchorEl.getBoundingClientRect().right}px)` : 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export function DropdownItem({ children, onClick, disabled, icon }: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center space-x-2 px-4 py-2 text-sm text-foreground hover:bg-secondary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
        disabled ? '' : 'cursor-pointer'
      }`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

Dropdown.Item = DropdownItem;
