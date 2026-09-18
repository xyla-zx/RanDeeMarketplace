import React from 'react';

interface TabsProps {
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div className={`border-b border-border ${className}`}>
      <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-secondary hover:text-foreground hover:border-secondary/50'
            }`}
          >
            {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

interface TabPanelProps {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

export function TabPanel({ isActive, children, className = '' }: TabPanelProps) {
  if (!isActive) return null;

  return (
    <div className={`py-4 animate-fade-in ${className}`}>
      {children}
    </div>
  );
}

Tabs.Panel = TabPanel;
