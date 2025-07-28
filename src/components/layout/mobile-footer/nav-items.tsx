
import { NavItem } from '@/lib/types';
import { navigationItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Settings } from 'lucide-react';

// Define custom NavItems for Home and Profile menu
const newNavItems: NavItem[] = [
  {
    title: 'Home',
    icon: ({ className }) => <img src="/zephora-logo.png" alt="Zephora Logo" className={cn(className, "w-6 h-6 rounded-full object-cover")} />,
    color: 'text-gray-500',
    path: '/'
  },
  {
    title: 'Profile',
    icon: ({ className }) => (
      <Avatar className={cn(className, "w-6 h-6")}>
        <AvatarImage src="/placeholder-avatar.jpg" />
        <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
      </Avatar>
    ),
    color: 'text-gray-500',
    children: [
      { title: 'Profile', path: '/company-profile', icon: Users, color: 'text-sky-600' },
      { title: 'Settings', path: '/system-settings', icon: Settings, color: 'text-slate-500' },
    ]
  },
];

// Combine all navigation items
const mobileNavigationItems: NavItem[] = [
  ...newNavItems,
  ...navigationItems
];

// Mobile icon order with pre-defined groups using first words of titles
const iconOrder = [
  ['Home', 'Sales', 'Purchase', 'Payments', 'Profile'],
  ['Employees', 'Inventory', 'Financial', 'Reports', 'Settings']
];

// Create mobile navigation items by combining navigation items with new items
const createMobileNavItems = () => {
  const navItemsMap = new Map(mobileNavigationItems.map(item => [item.title.split(' ')[0], item]));

  return iconOrder.map(group =>
    group.map(label => {
      const navItem = navItemsMap.get(label);
      if (navItem) {
        return { ...navItem, label };
      }
      return null;
    }).filter(Boolean)
  );
};

// Create mobile items with groups
export const mobileNavItems = createMobileNavItems();
