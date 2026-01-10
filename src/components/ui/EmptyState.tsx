import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * Reusable EmptyState component for dashboard sections.
 * Designed to provide clear feedback when no data is available
 * while maintaining the premium dark fintech aesthetic.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  action,
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in-95 duration-500",
      className
    )}>
      <div className="w-20 h-20 bg-accent/30 rounded-[2rem] flex items-center justify-center text-muted-foreground/60 shadow-inner mb-6 group hover:scale-110 transition-transform duration-500">
        <Icon size={40} className="group-hover:text-primary transition-colors" />
      </div>
      
      <h4 className="text-xl font-bold tracking-tight text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground mt-2 max-w-[280px] font-medium leading-relaxed">
        {description}
      </p>
      
      {action && (
        <button 
          onClick={action.onClick}
          className="mt-8 px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all active:scale-95"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};
