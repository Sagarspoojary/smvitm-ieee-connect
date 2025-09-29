import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ieee-blue via-ieee-accent to-ieee-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* IEEE Logo placeholder */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <span className="text-3xl font-bold text-white">IEEE</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            IEEE Student Branch
            <span className="block text-ieee-light-blue">SMVITM</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Advancing Technology for Humanity
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Join the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-white text-ieee-blue hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
            >
              Meet Our Team
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-white/80">Active Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <Award className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-white/80">Achievements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <BookOpen className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Publications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;