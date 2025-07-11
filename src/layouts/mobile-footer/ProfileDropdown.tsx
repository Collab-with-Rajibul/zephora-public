
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Moon, Users, Settings, LogOut } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface ProfileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
  onClose: () => void;
}

export function ProfileDropdown({ isOpen, onToggle, onNavigate, onClose }: ProfileDropdownProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleDropdownItemClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DropdownMenuTrigger asChild>
        <div onClick={onToggle} className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <Avatar className="w-6 h-6">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-in slide-in-from-bottom-2 duration-200">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleDropdownItemClick('/company-profile')}>
          <Users className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDropdownItemClick('/system-settings')}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Sun className="mr-2 h-4 w-4 text-yellow-400" />
          ) : (
            <Moon className="mr-2 h-4 w-4 text-slate-900" />
          )}
          <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={() => console.log('Logout')}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
