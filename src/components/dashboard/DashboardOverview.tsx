
"use client";

import React from 'react';
import { dashboardMetrics } from '@/lib/constants';
import { MetricCard } from './MetricCard';
import { QuickActions } from './QuickActions';
import { Charts } from './Charts';
import { ActivityFeed } from './ActivityFeed';

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      
      {/* Charts Section */}
      <Charts />
      
      {/* Recent Activity */}
      <ActivityFeed />
    </div>
  );
}
