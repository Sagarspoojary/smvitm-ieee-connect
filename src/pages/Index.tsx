import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import AchievementsSection from '@/components/AchievementsSection';
import PublicationsSection from '@/components/PublicationsSection';
import SocietiesSection from '@/components/SocietiesSection';
import EventManagement from '@/components/EventManagement';
import LoginModal from '@/components/LoginModal';
import NotificationSystem from '@/components/NotificationSystem';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface IndexProps {
  user: any;
  onLogin: (user: any) => void;
  onLogout: () => void;
}

const Index: React.FC<IndexProps> = ({ user, onLogin, onLogout }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [notifications] = useState([
    {
      id: '1',
      title: 'New Event Added',
      message: '5G Technology Workshop scheduled for next Friday',
      type: 'event',
      timestamp: new Date().toISOString(),
      read: false
    }
  ]);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={handleLoginClick}
        onLogout={onLogout}
        user={user}
        notifications={notifications}
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <AchievementsSection />
        <PublicationsSection />
        <SocietiesSection />
        
        {/* Event Management Section - Only visible to logged in office bearers */}
        {user?.isOfficeBearer && (
          <section className="section-padding bg-ieee-gray">
            <div className="container mx-auto">
              <Tabs defaultValue="events" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="events">Event Management</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="events" className="mt-8">
                  <EventManagement user={user} />
                </TabsContent>
                
                <TabsContent value="notifications" className="mt-8">
                  <NotificationSystem user={user} />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseLogin}
        onLogin={onLogin}
      />
    </div>
  );
};

export default Index;
