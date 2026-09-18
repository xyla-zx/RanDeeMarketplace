import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}) => {
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
};

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  children, 
  className = '', 
  sticky = true 
}) => {
  return (
    <header className={`${sticky ? 'sticky top-0 z-50' : ''} bg-white border-b border-border ${className}`}>
      {children}
    </header>
  );
};

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <footer className={`bg-white border-t border-border mt-auto ${className}`}>
      {children}
    </footer>
  );
};

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export const Main: React.FC<MainProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <main className={`flex-1 ${className}`}>
      {children}
    </main>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  as: Component = 'section' 
}) => {
  return (
    <Component className={`py-8 ${className}`}>
      {children}
    </Component>
  );
};

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = '' 
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({ 
  children, 
  direction = 'row', 
  align = 'center',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '' 
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  return (
    <div className={`flex ${directionClasses[direction]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrap ? 'flex-wrap' : ''} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

interface StackProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Stack: React.FC<StackProps> = ({ 
  children, 
  gap = 'md',
  className = '' 
}) => {
  const gapClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  };

  return (
    <div className={`${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ 
  orientation = 'horizontal',
  className = '' 
}) => {
  return (
    <div 
      className={`bg-border ${orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full'} ${className}`}
      role="separator"
    />
  );
};

interface SpacerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  orientation?: 'horizontal' | 'vertical';
}

export const Spacer: React.FC<SpacerProps> = ({ 
  size = 'md',
  orientation = 'vertical' 
}) => {
  const sizeClasses = {
    sm: orientation === 'horizontal' ? 'w-2' : 'h-2',
    md: orientation === 'horizontal' ? 'w-4' : 'h-4',
    lg: orientation === 'horizontal' ? 'w-6' : 'h-6',
    xl: orientation === 'horizontal' ? 'w-8' : 'h-8',
  };

  return <div className={sizeClasses[size]} />;
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  actions,
  className = '' 
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 ${className}`}>
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </div>
  );
};

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  className = '' 
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`mb-4 ${className}`}>
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <li className="text-gray-400">/</li>
            )}
            <li>
              {item.href ? (
                <a href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  children, 
  className = '',
  collapsible = false 
}) => {
  return (
    <aside className={`w-64 bg-white border-r border-border min-h-full ${className}`}>
      {children}
    </aside>
  );
};

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export const Content: React.FC<ContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex-1 p-6 ${className}`}>
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  sidebar,
  header,
  footer,
  className = '' 
}) => {
  if (sidebar) {
    return (
      <div className={`flex min-h-screen ${className}`}>
        {sidebar}
        <div className="flex-1 flex flex-col">
          {header}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
          {footer}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {header}
      <main className="flex-1">
        {children}
      </main>
      {footer}
    </div>
  );
};
