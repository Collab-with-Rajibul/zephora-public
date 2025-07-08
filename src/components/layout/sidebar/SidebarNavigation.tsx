
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from '@/lib/constants';

interface SidebarNavigationProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarNavigation({ isCollapsed, onToggle }: SidebarNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Sales Management', 'Purchase Management']);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = () => {
    if (isMobileScreen() && !isCollapsed) {
        onToggle();
    } else if (!isMobileScreen()) {
        // any other logic for non-mobile
    }
  };

  const isMobileScreen = () => {
      return window.innerWidth < 768;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItems.includes(item.title);
          
          return (
            <div key={item.title}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded-lg",
                  isCollapsed ? "justify-center px-2" : "justify-start"
                )}
                onClick={() => {
                  if (isCollapsed) {
                    onToggle();
                    if (item.children && !expandedItems.includes(item.title)) {
                      setExpandedItems(prev => [...prev, item.title]);
                    }
                  } else if (item.children) {
                    toggleExpanded(item.title);
                  }
                }}
              >
                <Icon className={cn("w-5 h-5 shrink-0", item.color)} />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 text-sm font-medium">{item.title}</span>
                    {item.children && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 ml-auto transition-transform",
                          isExpanded && "rotate-180"
                        )} 
                      />
                    )}
                  </>
                )}
              </Button>
              
              {!isCollapsed && item.children && isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;
                    
                    const buttonContent = (
                      <>
                        <ChildIcon className={cn("w-4 h-4 shrink-0", child.color)} />
                        <span className="ml-3">{child.title}</span>
                      </>
                    );
                    
                    const buttonProps = {
                      variant: "ghost" as const,
                      className: "w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg",
                    };

                    if (child.path) {
                      return (
                        <Button {...buttonProps} asChild key={child.title} onClick={handleLinkClick}>
                          <Link to={child.path}>
                            {buttonContent}
                          </Link>
                        </Button>
                      );
                    }

                    return (
                      <Button key={child.title} {...buttonProps}>
                        {buttonContent}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
