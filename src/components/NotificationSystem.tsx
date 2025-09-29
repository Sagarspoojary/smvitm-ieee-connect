import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Bell, X, Calendar, Users, Award, BookOpen, AlertCircle } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'event' | 'achievement' | 'publication' | 'general';
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
}

interface NotificationSystemProps {
  user: any;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ user }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast } = useToast();

  // Sample notifications for demo
  const sampleNotifications: Notification[] = [
    {
      id: '1',
      title: 'New Event Added',
      message: '5G Technology Workshop scheduled for next Friday at 2 PM in the auditorium.',
      type: 'event',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
      read: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Achievement Unlocked',
      message: 'IEEE Student Branch SMVITM won the Best Paper Award at the international conference.',
      type: 'achievement',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'New Publication',
      message: 'Research paper on "AI-Driven Network Optimization" has been published in IEEE Transactions.',
      type: 'publication',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      read: true,
      priority: 'low'
    },
    {
      id: '4',
      title: 'Membership Reminder',
      message: 'IEEE membership renewal deadline is approaching. Renew by next week to continue benefits.',
      type: 'general',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      read: false,
      priority: 'medium'
    }
  ];

  // Load notifications from localStorage or use sample data
  useEffect(() => {
    const savedNotifications = localStorage.getItem('ieeeNotifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    } else {
      setNotifications(sampleNotifications);
      localStorage.setItem('ieeeNotifications', JSON.stringify(sampleNotifications));
    }
  }, []);

  // Show popup notification for new unread notifications
  useEffect(() => {
    const unreadNotifications = notifications.filter(n => !n.read);
    if (unreadNotifications.length > 0 && user) {
      const latestNotification = unreadNotifications[0];
      if (new Date().getTime() - new Date(latestNotification.timestamp).getTime() < 60000) {
        // Show toast for notifications less than 1 minute old
        toast({
          title: latestNotification.title,
          description: latestNotification.message,
          variant: latestNotification.priority === 'high' ? 'destructive' : 'default'
        });
      }
    }
  }, [notifications, user, toast]);

  const markAsRead = (notificationId: string) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === notificationId
        ? { ...notification, read: true }
        : notification
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('ieeeNotifications', JSON.stringify(updatedNotifications));
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
    localStorage.setItem('ieeeNotifications', JSON.stringify(updatedNotifications));
  };

  const deleteNotification = (notificationId: string) => {
    const updatedNotifications = notifications.filter(n => n.id !== notificationId);
    setNotifications(updatedNotifications);
    localStorage.setItem('ieeeNotifications', JSON.stringify(updatedNotifications));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'event': return Calendar;
      case 'achievement': return Award;
      case 'publication': return BookOpen;
      case 'general': return AlertCircle;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'event': return 'text-blue-600';
      case 'achievement': return 'text-yellow-600';
      case 'publication': return 'text-green-600';
      case 'general': return 'text-gray-600';
      default: return 'text-primary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const now = new Date().getTime();
    const notificationTime = new Date(timestamp).getTime();
    const diffInMinutes = Math.floor((now - notificationTime) / 60000);
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!user) return null;

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <Button
        variant="ghost"
        size="sm"
        className="relative p-2"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </Button>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 top-12 w-80 md:w-96 bg-background border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            <div className="flex space-x-2">
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  Mark all read
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNotifications(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">
                <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => {
                const IconComponent = getNotificationIcon(notification.type);
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-border hover:bg-muted/50 transition-colors ${
                      !notification.read ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className={`p-1 rounded-full bg-muted ${getNotificationColor(notification.type)}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center space-x-2 ml-2">
                            <div className={`w-2 h-2 rounded-full ${getPriorityColor(notification.priority)}`}></div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="p-1 h-auto"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs h-auto p-1"
                            >
                              Mark read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-border text-center">
            <Button variant="ghost" size="sm" className="text-xs">
              View All Notifications
            </Button>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {showNotifications && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowNotifications(false)}
        />
      )}
    </div>
  );
};

export default NotificationSystem;