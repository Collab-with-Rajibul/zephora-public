
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, Plug, Settings, Link, Check, X, AlertTriangle } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  const integrations = [
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Payment processing and subscription management',
      category: 'Payment',
      status: 'Connected',
      icon: '💳',
      lastSync: '2024-01-15 10:30 AM',
      settings: { apiKey: '••••••••••••3245', webhookUrl: 'https://api.company.com/stripe' }
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks Online',
      description: 'Sync accounting data and transactions',
      category: 'Accounting',
      status: 'Connected',
      icon: '📊',
      lastSync: '2024-01-15 09:15 AM',
      settings: { companyId: 'QB001', syncFrequency: 'Daily' }
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Email marketing and customer communication',
      category: 'Marketing',
      status: 'Disconnected',
      icon: '📧',
      lastSync: 'Never',
      settings: { apiKey: '', listId: '' }
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Team notifications and alerts',
      category: 'Communication',
      status: 'Connected',
      icon: '💬',
      lastSync: '2024-01-15 11:45 AM',
      settings: { webhookUrl: '••••••••••••webhook', channel: '#finance' }
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'E-commerce sales data synchronization',
      category: 'E-commerce',
      status: 'Error',
      icon: '🛒',
      lastSync: '2024-01-14 03:22 PM',
      settings: { storeUrl: 'mystore.shopify.com', apiKey: '••••••••••••8901' }
    }
  ];

  const availableIntegrations = [
    { name: 'PayPal', description: 'Payment processing', category: 'Payment', icon: '💰' },
    { name: 'Xero', description: 'Cloud accounting', category: 'Accounting', icon: '🧮' },
    { name: 'HubSpot', description: 'CRM and marketing', category: 'CRM', icon: '🎯' },
    { name: 'Zapier', description: 'Workflow automation', category: 'Automation', icon: '⚡' },
    { name: 'Google Analytics', description: 'Web analytics', category: 'Analytics', icon: '📈' },
    { name: 'Microsoft Teams', description: 'Team collaboration', category: 'Communication', icon: '👥' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Disconnected': return 'bg-gray-100 text-gray-800';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Connected': return <Check className="h-4 w-4 text-green-600" />;
      case 'Disconnected': return <X className="h-4 w-4 text-gray-600" />;
      case 'Error': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default: return <X className="h-4 w-4 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Payment': return 'bg-blue-100 text-blue-800';
      case 'Accounting': return 'bg-green-100 text-green-800';
      case 'Marketing': return 'bg-purple-100 text-purple-800';
      case 'Communication': return 'bg-yellow-100 text-yellow-800';
      case 'E-commerce': return 'bg-orange-100 text-orange-800';
      case 'CRM': return 'bg-pink-100 text-pink-800';
      case 'Analytics': return 'bg-indigo-100 text-indigo-800';
      case 'Automation': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground">Connect and manage third-party services</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Manage API Keys
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Plug className="h-4 w-4 text-blue-500" />
              <span className="text-2xl font-bold">{integrations.length}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-green-600">
              {integrations.filter(i => i.status === 'Connected').length}
            </span>
            <p className="text-sm text-muted-foreground">Currently syncing</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Connection Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-red-600">
              {integrations.filter(i => i.status === 'Error').length}
            </span>
            <p className="text-sm text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">{availableIntegrations.length}</span>
            <p className="text-sm text-muted-foreground">Ready to connect</p>
          </CardContent>
        </Card>
      </div>

      {/* Connected Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Link className="h-5 w-5" />
            <span>Connected Integrations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations.map((integration) => (
              <div key={integration.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{integration.icon}</span>
                    <div>
                      <h3 className="font-semibold">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getCategoryColor(integration.category)}>
                      {integration.category}
                    </Badge>
                    <Badge className={getStatusColor(integration.status)}>
                      {getStatusIcon(integration.status)}
                      <span className="ml-1">{integration.status}</span>
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                  <div>
                    <Label className="text-xs font-medium text-muted-foreground">Last Sync</Label>
                    <p className="text-sm">{integration.lastSync}</p>
                  </div>
                  {Object.entries(integration.settings).map(([key, value]) => (
                    <div key={key}>
                      <Label className="text-xs font-medium text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                      <p className="text-sm">{value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={integration.status === 'Connected'} 
                      disabled={integration.status === 'Error'}
                    />
                    <Label className="text-sm">Auto-sync enabled</Label>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-1" />
                      Configure
                    </Button>
                    {integration.status === 'Connected' && (
                      <Button variant="outline" size="sm">
                        Sync Now
                      </Button>
                    )}
                    {integration.status === 'Error' && (
                      <Button variant="outline" size="sm" className="text-red-600">
                        Reconnect
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Integrations */}
      <Card>
        <CardHeader>
          <CardTitle>Available Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableIntegrations.map((integration, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{integration.icon}</span>
                  <div>
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(integration.category)}>
                    {integration.category}
                  </Badge>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>API Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="api-rate-limit">API Rate Limit (requests/hour)</Label>
              <Input id="api-rate-limit" defaultValue="1000" />
            </div>
            <div>
              <Label htmlFor="webhook-timeout">Webhook Timeout (seconds)</Label>
              <Input id="webhook-timeout" defaultValue="30" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="retry-attempts">Retry Attempts</Label>
              <Input id="retry-attempts" defaultValue="3" />
            </div>
            <div>
              <Label htmlFor="sync-frequency">Default Sync Frequency</Label>
              <select className="w-full p-2 border rounded-md">
                <option value="hourly">Every Hour</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="manual">Manual Only</option>
              </select>
            </div>
          </div>
          
          <div className="flex space-x-2 pt-4">
            <Button variant="outline">Test Connection</Button>
            <Button>Save API Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntegrationsPage;
