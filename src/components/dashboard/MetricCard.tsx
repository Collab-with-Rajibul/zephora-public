
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DashboardMetric } from '@/lib/types';
import { 
  DollarSign, 
  ArrowUp, 
  ArrowDown, 
  File,
  Bell,
  Folder,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

const iconMap = {
  'dollar-sign': DollarSign,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'file': File,
  'bell': Bell,
  'folder': Folder
};

interface MetricCardProps {
  metric: DashboardMetric;
  className?: string;
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || DollarSign;
  
  const formatValue = (value: number, currency?: string) => {
    if (currency) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return value.toLocaleString();
  };

  const getTrendIcon = () => {
    if (!metric.trend) return null;
    
    switch (metric.trend.direction) {
      case 'up':
        return <TrendingUp className="w-3 h-3" />;
      case 'down':
        return <TrendingDown className="w-3 h-3" />;
      default:
        return <Minus className="w-3 h-3" />;
    }
  };

  const getTrendColor = () => {
    if (!metric.trend) return 'text-muted-foreground';
    
    if (metric.status === 'positive') {
      return metric.trend.direction === 'up' ? 'text-success' : 'text-destructive';
    } else if (metric.status === 'negative') {
      return metric.trend.direction === 'up' ? 'text-destructive' : 'text-success';
    }
    
    switch (metric.trend.direction) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold number-tabular">
            {formatValue(metric.value, metric.currency)}
          </div>
          
          {metric.trend && (
            <div className="flex items-center space-x-1 text-xs">
              <Badge 
                variant="outline" 
                className={cn(
                  "flex items-center space-x-1 border-0 px-2 py-0.5",
                  getTrendColor()
                )}
              >
                {getTrendIcon()}
                <span className="font-medium">
                  {metric.trend.percentage}%
                </span>
              </Badge>
              <span className="text-muted-foreground">{metric.trend.period}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
