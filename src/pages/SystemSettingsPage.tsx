
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Settings, Save, Shield, Bell, Database, Globe, Wrench } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const SystemSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    // General Settings
    systemName: 'FinanceFlow System',
    maintenanceMode: false,
    autoBackup: true,
    backupFrequency: 'daily',
    sessionTimeout: '30',
    
    // Security Settings
    passwordPolicy: 'medium',
    twoFactorAuth: true,
    loginAttempts: '5',
    accountLockout: '15',
    dataEncryption: true,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    systemAlerts: true,
    maintenanceAlerts: true,
    
    // Database Settings
    connectionPoolSize: '10',
    queryTimeout: '30',
    autoVacuum: true,
    
    // Performance Settings
    cacheEnabled: true,
    cacheSize: '512',
    compressionEnabled: true,
    
    // Integration Settings
    apiRateLimit: '1000',
    webhookRetries: '3',
    externalSync: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    toast.success('System settings updated successfully!');
  };

  const systemStatus = {
    uptime: '15 days, 8 hours',
    version: '2.1.4',
    lastUpdate: '2024-01-10',
    health: 'Excellent',
    storage: '75%',
    memory: '62%',
    cpu: '28%'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Configure system-wide preferences and options</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Reset to Defaults</Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>System Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Health Status</Label>
                <div className="mt-1">
                  <Badge className="bg-green-100 text-green-800">
                    {systemStatus.health}
                  </Badge>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Uptime</Label>
                <p className="text-sm text-muted-foreground">{systemStatus.uptime}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Version</Label>
                <p className="text-sm text-muted-foreground">{systemStatus.version}</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Last Update</Label>
                <p className="text-sm text-muted-foreground">{systemStatus.lastUpdate}</p>
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-sm">Storage</Label>
                  <span className="text-sm text-muted-foreground">{systemStatus.storage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: systemStatus.storage }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-sm">Memory</Label>
                  <span className="text-sm text-muted-foreground">{systemStatus.memory}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: systemStatus.memory }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-sm">CPU</Label>
                  <span className="text-sm text-muted-foreground">{systemStatus.cpu}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: systemStatus.cpu }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Panels */}
        <div className="lg:col-span-3 space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5" />
                <span>General Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="system-name">System Name</Label>
                  <Input
                    id="system-name"
                    value={settings.systemName}
                    onChange={(e) => handleSettingChange('systemName', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <Switch
                    id="maintenance-mode"
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-backup">Auto Backup</Label>
                  <Switch
                    id="auto-backup"
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => handleSettingChange('autoBackup', checked)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="backup-frequency">Backup Frequency</Label>
                <Select value={settings.backupFrequency} onValueChange={(value) => handleSettingChange('backupFrequency', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password-policy">Password Policy</Label>
                  <Select value={settings.passwordPolicy} onValueChange={(value) => handleSettingChange('passwordPolicy', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weak">Weak</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="strong">Strong</SelectItem>
                      <SelectItem value="very-strong">Very Strong</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="login-attempts">Max Login Attempts</Label>
                  <Input
                    id="login-attempts"
                    type="number"
                    value={settings.loginAttempts}
                    onChange={(e) => handleSettingChange('loginAttempts', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="account-lockout">Account Lockout (minutes)</Label>
                  <Input
                    id="account-lockout"
                    type="number"
                    value={settings.accountLockout}
                    onChange={(e) => handleSettingChange('accountLockout', e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <Switch
                    id="two-factor"
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="data-encryption">Data Encryption</Label>
                <Switch
                  id="data-encryption"
                  checked={settings.dataEncryption}
                  onCheckedChange={(checked) => handleSettingChange('dataEncryption', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch
                    id="email-notifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-notifications">SMS Notifications</Label>
                  <Switch
                    id="sms-notifications"
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="system-alerts">System Alerts</Label>
                  <Switch
                    id="system-alerts"
                    checked={settings.systemAlerts}
                    onCheckedChange={(checked) => handleSettingChange('systemAlerts', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
                  <Switch
                    id="maintenance-alerts"
                    checked={settings.maintenanceAlerts}
                    onCheckedChange={(checked) => handleSettingChange('maintenanceAlerts', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Database & Performance Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Database Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="connection-pool">Connection Pool Size</Label>
                  <Input
                    id="connection-pool"
                    type="number"
                    value={settings.connectionPoolSize}
                    onChange={(e) => handleSettingChange('connectionPoolSize', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="query-timeout">Query Timeout (seconds)</Label>
                  <Input
                    id="query-timeout"
                    type="number"
                    value={settings.queryTimeout}
                    onChange={(e) => handleSettingChange('queryTimeout', e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-vacuum">Auto Vacuum</Label>
                  <Switch
                    id="auto-vacuum"
                    checked={settings.autoVacuum}
                    onCheckedChange={(checked) => handleSettingChange('autoVacuum', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Performance Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="cache-enabled">Cache Enabled</Label>
                  <Switch
                    id="cache-enabled"
                    checked={settings.cacheEnabled}
                    onCheckedChange={(checked) => handleSettingChange('cacheEnabled', checked)}
                  />
                </div>
                <div>
                  <Label htmlFor="cache-size">Cache Size (MB)</Label>
                  <Input
                    id="cache-size"
                    type="number"
                    value={settings.cacheSize}
                    onChange={(e) => handleSettingChange('cacheSize', e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="compression">Compression</Label>
                  <Switch
                    id="compression"
                    checked={settings.compressionEnabled}
                    onCheckedChange={(checked) => handleSettingChange('compressionEnabled', checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettingsPage;
