import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Star, Users, Calendar, MapPin } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      title: 'IEEE International Conference Best Paper Award',
      description: 'Our research on "AI-Driven Network Optimization" won the best paper award at IEEE INFOCOM 2024.',
      date: '2024',
      category: 'Research',
      icon: Trophy,
      level: 'International'
    },
    {
      title: 'IEEE Student Branch Outstanding Achievement Award',
      description: 'Recognized for exceptional contribution to IEEE activities and community service.',
      date: '2023',
      category: 'Branch',
      icon: Medal,
      level: 'National'
    },
    {
      title: 'IEEE SIGHT Project Impact Award',
      description: 'Our "Rural Internet Connectivity" project impacted over 5000+ people in remote villages.',
      date: '2023',
      category: 'Social Impact',
      icon: Star,
      level: 'Regional'
    },
    {
      title: 'IEEE Xtreme Programming Competition',
      description: 'Team secured 15th position globally in the IEEE Xtreme 17.0 programming competition.',
      date: '2023',
      category: 'Competition',
      icon: Trophy,
      level: 'International'
    },
    {
      title: 'Best IEEE Student Branch - Karnataka Section',
      description: 'Awarded as the most active and impactful student branch in Karnataka.',
      date: '2022',
      category: 'Branch',
      icon: Medal,
      level: 'State'
    },
    {
      title: 'IEEE WIE Outstanding Membership Drive',
      description: 'Successfully increased women participation in IEEE activities by 200%.',
      date: '2022',
      category: 'Membership',
      icon: Users,
      level: 'Regional'
    }
  ];

  const getIconColor = (level: string) => {
    switch (level) {
      case 'International': return 'text-yellow-600';
      case 'National': return 'text-blue-600';
      case 'Regional': return 'text-green-600';
      case 'State': return 'text-purple-600';
      default: return 'text-primary';
    }
  };

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case 'Research': return 'default';
      case 'Competition': return 'secondary';
      case 'Social Impact': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating our journey of excellence, innovation, and impact in the IEEE community 
            and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full bg-primary/10 ${getIconColor(achievement.level)}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant={getBadgeVariant(achievement.category)}>
                    {achievement.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {achievement.level}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-ieee-gray rounded-2xl p-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">15+</h3>
            <p className="text-sm text-muted-foreground">Awards Won</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">5+</h3>
            <p className="text-sm text-muted-foreground">International Recognition</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">5000+</h3>
            <p className="text-sm text-muted-foreground">People Impacted</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Medal className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">3</h3>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;