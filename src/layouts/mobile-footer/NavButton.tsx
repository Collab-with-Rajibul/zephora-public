import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NavItem } from '@/lib/types';

interface NavButtonProps {
  item: NavItem & { label: string };
  activeMenu: string | null;
  handleNavigation: (path?: string) => void;
  handleMenuToggle: (title: string, event: React.MouseEvent) => void;
  buttonRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
}

export function NavButton({ item, activeMenu, handleNavigation, handleMenuToggle, buttonRefs }: NavButtonProps) {
  const renderIconButton = useCallback(() => {
    const baseButtonClass = "flex flex-col items-center justify-start text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-out rounded-xl select-none touch-manipulation h-16 w-full min-w-0 px-1 pt-1 pb-2";
    const iconContainerClass = "w-6 h-6 flex items-center justify-center flex-shrink-0";
    const labelClass = "text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0";

    const hasDropdown = !!item.children?.length;
    const Icon = item.icon;

    const handleClick = (e: React.MouseEvent) => {
      if (hasDropdown) {
        handleMenuToggle(item.title, e);
      } else if (item.path) {
        handleNavigation(item.path);
      }
    };

    return (
      <Button
        key={item.title}
        variant="ghost"
        size="sm"
        className={cn(baseButtonClass, activeMenu === item.title && 'bg-accent text-primary')}
        onClick={handleClick}
        aria-label={hasDropdown ? `${item.label} menu` : `Navigate to ${item.title}`}
        data-dropdown-trigger={hasDropdown || undefined}
        ref={(el) => (buttonRefs.current[item.title] = el)}
      >
        <div className={iconContainerClass}>
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
        <span className={labelClass}>{item.label}</span>
      </Button>
    );
  }, [handleNavigation, handleMenuToggle, activeMenu, item, buttonRefs]);

  return renderIconButton();
}
