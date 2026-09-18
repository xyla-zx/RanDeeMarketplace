import React from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  onChange?: (openItems: string[]) => void;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenItems = [],
  onChange,
  className = '',
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultOpenItems);

  const toggleItem = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    if (item?.disabled) return;

    let newOpenItems: string[];
    if (openItems.includes(itemId)) {
      newOpenItems = openItems.filter((id) => id !== itemId);
    } else {
      if (allowMultiple) {
        newOpenItems = [...openItems, itemId];
      } else {
        newOpenItems = [itemId];
      }
    }

    setOpenItems(newOpenItems);
    onChange?.(newOpenItems);
  };

  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id} className={item.disabled ? 'opacity-50' : ''}>
            <button
              onClick={() => toggleItem(item.id)}
              disabled={item.disabled}
              className="w-full flex items-center justify-between py-4 px-2 text-left hover:bg-gray-50 transition-colors rounded-lg"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="pb-4 px-2 animate-in slide-in-from-top-2 duration-200"
                role="region"
                aria-labelledby={item.title}
              >
                <div className="text-gray-600">{item.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
