import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Lock, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Demo users for testing
  const demoUsers = [
    {
      email: 'member@smvitm.edu',
      password: 'member123',
      name: 'John Doe',
      role: 'Member',
      isOfficeBearer: false
    },
    {
      email: 'president@smvitm.edu',
      password: 'ieeepres2025',
      name: 'Jane Smith',
      role: 'President',
      isOfficeBearer: true
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = demoUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Store user in localStorage for demo purposes
      localStorage.setItem('ieeeUser', JSON.stringify(user));
      onLogin(user);
      onClose();
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid email or password. Please try the demo credentials.');
    }
    
    setIsLoading(false);
  };

  const fillDemoCredentials = (userType: 'member' | 'president') => {
    if (userType === 'member') {
      setEmail('member@smvitm.edu');
      setPassword('member123');
    } else {
      setEmail('president@smvitm.edu');
      setPassword('ieeepres2025');
    }
    setError('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display">Login to IEEE Portal</DialogTitle>
          <DialogDescription>
            Access your IEEE Student Branch dashboard
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold text-sm mb-3">Demo Credentials:</h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span>Member Access:</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fillDemoCredentials('member')}
              >
                Use Demo
              </Button>
            </div>
            <div className="text-muted-foreground">
              member@smvitm.edu / member123
            </div>
            
            <div className="flex justify-between items-center mt-3">
              <span>Office Bearer Access:</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fillDemoCredentials('president')}
              >
                Use Demo
              </Button>
            </div>
            <div className="text-muted-foreground">
              president@smvitm.edu / ieeepres2025
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;