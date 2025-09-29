import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const TeamSection: React.FC = () => {
  const officeBarers = [
    {
      name: 'Jane Smith',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      email: 'president@smvitm.edu',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'John Doe',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      email: 'vicepresident@smvitm.edu',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Alice Johnson',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      email: 'secretary@smvitm.edu',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Bob Wilson',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      email: 'treasurer@smvitm.edu',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Emma Davis',
      role: 'Technical Chair',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      email: 'technical@smvitm.edu',
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Michael Brown',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      email: 'events@smvitm.edu',
      linkedin: '#',
      github: '#'
    }
  ];

  return (
    <section id="team" className="section-padding bg-ieee-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated office bearers who lead IEEE Student Branch - SMVITM 
            with passion, expertise, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeBarers.map((member, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-semibold mb-4">
                  {member.role}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground rounded-full transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted-foreground text-muted-foreground hover:text-muted rounded-full transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in joining our leadership team?
          </p>
          <a
            href="mailto:president@smvitm.edu"
            className="inline-flex items-center text-primary hover:text-accent font-semibold"
          >
            Contact Us
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;