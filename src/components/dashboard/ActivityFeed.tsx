
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { recentActivity } from '@/lib/constants';
import { formatDistanceToNow } from 'date-fns';
import {
  DollarSign,
  File,
  Users,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const typeIcons = {
  sale: File,
  purchase: File,
  payment: DollarSign,
  customer: Users,
  supplier: Users
};

const statusColors = {
  sent: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  received: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  recorded: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  paid: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
};

interface ActivityFeedProps {
  className?: string;
}

export function ActivityFeed({ className }: ActivityFeedProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          <p className="text-sm text-muted-foreground">Latest transactions and updates</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="space-y-0">
          {recentActivity.map((item, index) => {
            const Icon = typeIcons[item.type];
            const isLast = index === recentActivity.length - 1;
            
            return (
              <div key={item.id} className="relative">
                <div className="flex items-start space-x-4 p-6 hover:bg-muted/50 transition-colors">
                  {/* Timeline line */}
{/*                   {!isLast && (
                    <div className="absolute left-10 top-16 w-px h-6 bg-border" />
                  )} */}
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        {item.amount && (
                          <span className="text-sm font-medium number-tabular">
                            ${item.amount.toLocaleString()}
                          </span>
                        )}
                        {item.status && (
                          <Badge 
                            variant="outline" 
                            className={cn(
                              "text-xs border-0",
                              statusColors[item.status as keyof typeof statusColors]
                            )}
                          >
                            {item.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                    
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
