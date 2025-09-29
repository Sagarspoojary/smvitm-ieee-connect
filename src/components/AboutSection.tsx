import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Zap, Globe, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About IEEE Student Branch - SMVITM
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic student organization fostering innovation, technical excellence, 
            and professional development among future engineers and technologists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-4">
              Established as part of the world's largest technical professional organization, 
              IEEE Student Branch at SMVITM has been at the forefront of technological advancement 
              and student development since its inception.
            </p>
            <p className="text-muted-foreground mb-4">
              Our branch serves as a bridge between academic learning and industry application, 
              providing students with opportunities to engage in cutting-edge research, 
              professional networking, and skill development.
            </p>
            <p className="text-muted-foreground">
              With over 50 active members, we continue to uphold IEEE's mission of advancing 
              technology for humanity while nurturing the next generation of innovative leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Advance technology for humanity through education and innovation
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Be the leading technical organization for students and professionals
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">
                  Foster collaboration and networking among tech enthusiasts
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-display font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Drive technological innovation through research and development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-ieee-gray rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-display font-semibold text-center text-foreground mb-8">
            What We Do
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-3">Technical Events</h4>
              <p className="text-muted-foreground">
                Organize workshops, seminars, and conferences on cutting-edge technologies 
                to enhance technical knowledge and skills.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-3">Research & Development</h4>
              <p className="text-muted-foreground">
                Support student research projects and encourage participation in 
                IEEE competitions and publications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-3">Professional Development</h4>
              <p className="text-muted-foreground">
                Provide networking opportunities, industry connections, and 
                career guidance for aspiring engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;