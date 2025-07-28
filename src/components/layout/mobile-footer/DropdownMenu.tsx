import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';
import { Sun, Moon, LogOut } from 'lucide-react';
import { mobileNavItems } from './nav-items';

interface DropdownMenuProps {
  activeMenu: string | null;
  menuPosition: { left: number; transform: string };
  handleNavigation: (path?: string) => void;
  toggleTheme: () => void;
}

export function DropdownMenu({ activeMenu, menuPosition, handleNavigation, toggleTheme }: DropdownMenuProps) {
  const { theme } = useTheme();

  if (!activeMenu) return null;

  const dropdownMenuClass = "fixed bottom-[5.5rem] z-50 min-w-[8rem] w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-bottom-2 duration-200 md:hidden";
  const dropdownMenuStyle = {
    left: `${menuPosition.left}px`,
    transform: 'translateX(-50%)'
  };

  const activeItem = mobileNavItems.flat().find(item => item?.title === activeMenu);
  if (!activeItem) return null;

  const menuItemClasses = "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

  return (
    <div
      className={dropdownMenuClass}
      style={dropdownMenuStyle}
      data-dropdown-menu
    >
      {activeMenu === 'Profile' && (
        <>
          <div className="px-2 py-1.5 text-sm">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
            </div>
          </div>
          <div className="h-px bg-muted my-1" />
        </>
      )}
      
      {activeItem.children?.map((child) => {
        const ChildIcon = child.icon;
        return (
          <div key={child.title} className={menuItemClasses} onClick={() => handleNavigation(child.path)}>
            <ChildIcon className={cn("mr-2 h-4 w-4", child.color)} />
            <span className="truncate">{child.title}</span>
          </div>
        );
      })}

      {activeMenu === 'Profile' && (
        <>
          <div className={menuItemClasses} onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="mr-2 h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </div>
          <div className="h-px bg-muted my-1" />
          <div className={cn(menuItemClasses, "text-red-600 focus:text-red-600")} onClick={() => console.log('Logout')}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </div>
        </>
      )}
    </div>
  );
}
