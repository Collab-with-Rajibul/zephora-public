
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CreditCard, Save, FileText } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const RecordPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    type: 'received',
    amount: '',
    paymentMethod: '',
    paymentDate: new Date().toISOString().split('T')[0],
    customer: '',
    invoice: '',
    reference: '',
    description: '',
    category: '',
    status: 'completed'
  });

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!paymentData.amount || !paymentData.paymentMethod) {
      toast.error('Please fill in required fields (Amount and Payment Method)');
      return;
    }
    toast.success('Payment recorded successfully!');
    navigate('/');
  };

  const customers = ['Johnson & Co', 'Smith Industries', 'Tech Startup LLC', 'Global Corp', 'Local Business'];
  const suppliers = ['ABC Suppliers', 'XYZ Corp', 'Tech Solutions', 'Office Supplies Co', 'Utility Company'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Record Payment</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Payment Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="payment-type">Payment Type *</Label>
              <Select value={paymentData.type} onValueChange={(value) => handleInputChange('type', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="received">Payment Received</SelectItem>
                  <SelectItem value="sent">Payment Sent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Amount *</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={paymentData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="payment-date">Payment Date *</Label>
                <Input
                  id="payment-date"
                  type="date"
                  value={paymentData.paymentDate}
                  onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="payment-method">Payment Method *</Label>
              <Select value={paymentData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="check">Check</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="wire-transfer">Wire Transfer</SelectItem>
                  <SelectItem value="ach">ACH</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="customer-supplier">
                {paymentData.type === 'received' ? 'Customer' : 'Supplier'}
              </Label>
              <Select value={paymentData.customer} onValueChange={(value) => handleInputChange('customer', value)}>
                <SelectTrigger>
                  <SelectValue placeholder={`Select ${paymentData.type === 'received' ? 'customer' : 'supplier'}`} />
                </SelectTrigger>
                <SelectContent>
                  {(paymentData.type === 'received' ? customers : suppliers).map((entity) => (
                    <SelectItem key={entity} value={entity}>{entity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={paymentData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Additional Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="invoice">Related Invoice/Bill</Label>
              <Input
                id="invoice"
                placeholder="INV-2024-001 or PO-2024-001"
                value={paymentData.invoice}
                onChange={(e) => handleInputChange('invoice', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="reference">Reference Number</Label>
              <Input
                id="reference"
                placeholder="Bank reference, check number, etc."
                value={paymentData.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={paymentData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {paymentData.type === 'received' ? (
                    <>
                      <SelectItem value="invoice-payment">Invoice Payment</SelectItem>
                      <SelectItem value="advance-payment">Advance Payment</SelectItem>
                      <SelectItem value="refund">Refund</SelectItem>
                      <SelectItem value="other-income">Other Income</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="bill-payment">Bill Payment</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                      <SelectItem value="loan-payment">Loan Payment</SelectItem>
                      <SelectItem value="tax-payment">Tax Payment</SelectItem>
                      <SelectItem value="other-expense">Other Expense</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description/Notes</Label>
              <Textarea
                id="description"
                placeholder="Additional details about the payment"
                rows={4}
                value={paymentData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Payment Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium capitalize">{paymentData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">${paymentData.amount || '0.00'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Method:</span>
                  <span className="font-medium">{paymentData.paymentMethod || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{paymentData.paymentDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <FileText className="h-5 w-5" />
              <span>Create Invoice</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <CreditCard className="h-5 w-5" />
              <span>Record Another Payment</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2" onClick={() => navigate('/payment-tracking')}>
              <FileText className="h-5 w-5" />
              <span>View Payment History</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecordPaymentPage;
