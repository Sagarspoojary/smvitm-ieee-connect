import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wifi, Cpu, Heart, Users, ExternalLink, Calendar } from 'lucide-react';

const SocietiesSection: React.FC = () => {
  const societies = [
    {
      name: 'IEEE Communication Society',
      acronym: 'ComSoc',
      description: 'Advancing communications and networking technologies for global connectivity and information exchange.',
      icon: Wifi,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      members: 25,
      activities: [
        'Wireless Communication Workshops',
        '5G Technology Seminars',
        'Network Security Training',
        'Industry Expert Talks'
      ],
      recentEvent: {
        title: '5G and Beyond: Future of Wireless',
        date: '2024-03-15',
        participants: 120
      }
    },
    {
      name: 'IEEE Computer Society',
      acronym: 'CS',
      description: 'Promoting computer science and engineering excellence through education, research, and professional development.',
      icon: Cpu,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      members: 35,
      activities: [
        'Programming Competitions',
        'AI/ML Workshops',
        'Software Development Bootcamps',
        'Tech Talk Series'
      ],
      recentEvent: {
        title: 'Machine Learning in Healthcare',
        date: '2024-02-28',
        participants: 85
      }
    },
    {
      name: 'IEEE SIGHT',
      acronym: 'SIGHT',
      description: 'Special Interest Group on Humanitarian Technology - leveraging technology to address humanitarian challenges.',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      members: 20,
      activities: [
        'Rural Connectivity Projects',
        'Clean Energy Solutions',
        'Healthcare Technology',
        'Education Technology'
      ],
      recentEvent: {
        title: 'Solar Power for Rural Schools',
        date: '2024-01-20',
        participants: 200
      }
    },
    {
      name: 'IEEE Women in Engineering',
      acronym: 'WIE',
      description: 'Inspiring, engaging, encouraging, and empowering IEEE women members and fostering their success.',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      members: 18,
      activities: [
        'Women Leadership Seminars',
        'Mentorship Programs',
        'Career Development Workshops',
        'Networking Events'
      ],
      recentEvent: {
        title: 'Women in Tech: Breaking Barriers',
        date: '2024-03-08',
        participants: 150
      }
    }
  ];

  return (
    <section id="societies" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            IEEE Societies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse range of IEEE societies at SMVITM, each dedicated to advancing 
            specific technological domains and fostering professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {societies.map((society, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 ${society.bgColor} rounded-lg`}>
                      <society.icon className={`w-8 h-8 ${society.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                        {society.name}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {society.acronym}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{society.members}</div>
                    <div className="text-xs text-muted-foreground">Members</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {society.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Activities:</h4>
                  <ul className="space-y-1">
                    {society.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-ieee-gray rounded-lg p-4">
                  <h5 className="font-semibold text-sm text-foreground mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Recent Event
                  </h5>
                  <p className="text-sm font-medium text-primary mb-1">
                    {society.recentEvent.title}
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{society.recentEvent.date}</span>
                    <span>{society.recentEvent.participants} participants</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Learn More
                  </Button>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Join Society
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Society Stats */}
        <div className="bg-ieee-gray rounded-2xl p-8">
          <h3 className="text-xl font-display font-semibold text-center text-foreground mb-8">
            Society Impact Overview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">98</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">45+</div>
              <div className="text-sm text-muted-foreground">Events Organized</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">1200+</div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">8</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocietiesSection;