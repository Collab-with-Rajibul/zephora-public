
import { LucideIcon } from 'lucide-react';

export interface MobileIconItem {
  id: string;
  title: string;
  icon?: LucideIcon;
  color?: string;
  component?: () => JSX.Element;
  path?: string;
  isProfile?: boolean;
  navItem?: {
    title: string;
    path?: string;
    children?: Array<{
      title: string;
      path?: string;
      icon: LucideIcon;
      color?: string;
    }>;
  };
}

export interface MobileIconGroup {
  items: MobileIconItem[];
}
