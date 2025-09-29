import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: 'AI-Driven Network Optimization for 5G Infrastructure',
      authors: ['Jane Smith', 'John Doe', 'Dr. Rajesh Kumar'],
      journal: 'IEEE Transactions on Networking',
      year: '2024',
      type: 'Journal',
      abstract: 'This paper presents a novel approach to optimize 5G network performance using artificial intelligence algorithms, resulting in 30% improved efficiency.',
      doi: '10.1109/TNET.2024.123456',
      citations: 45
    },
    {
      title: 'Blockchain-Based Secure IoT Framework',
      authors: ['Alice Johnson', 'Bob Wilson', 'Dr. Priya Sharma'],
      journal: 'IEEE Internet of Things Journal',
      year: '2024',
      type: 'Journal',
      abstract: 'A comprehensive security framework for IoT devices using blockchain technology, enhancing data integrity and privacy protection.',
      doi: '10.1109/JIOT.2024.789012',
      citations: 32
    },
    {
      title: 'Machine Learning Approaches for Smart Grid Optimization',
      authors: ['Emma Davis', 'Michael Brown'],
      journal: 'IEEE Conference on Smart Grid Technologies',
      year: '2023',
      type: 'Conference',
      abstract: 'Implementation of ML algorithms for real-time smart grid optimization, achieving 25% reduction in energy waste.',
      doi: '10.1109/SGT.2023.345678',
      citations: 28
    },
    {
      title: 'Quantum Computing Applications in Cryptography',
      authors: ['Sarah Lee', 'David Chen', 'Dr. Anita Patel'],
      journal: 'IEEE Quantum Engineering',
      year: '2023',
      type: 'Journal',
      abstract: 'Exploration of quantum computing potential in modern cryptographic systems and future security implications.',
      doi: '10.1109/TQE.2023.901234',
      citations: 67
    },
    {
      title: 'Edge Computing for Real-Time Video Processing',
      authors: ['Kevin Zhang', 'Lisa Wang'],
      journal: 'IEEE Edge Computing Conference',
      year: '2023',
      type: 'Conference',
      abstract: 'Novel edge computing architecture for processing high-definition video streams with minimal latency.',
      doi: '10.1109/EDGE.2023.567890',
      citations: 19
    },
    {
      title: 'Sustainable Energy Management in Smart Cities',
      authors: ['Rachel Green', 'Tom Anderson', 'Dr. Vikram Singh'],
      journal: 'IEEE Sustainable Computing',
      year: '2022',
      type: 'Journal',
      abstract: 'Comprehensive study on implementing sustainable energy solutions in urban environments using IoT and AI.',
      doi: '10.1109/SUSCOM.2022.234567',
      citations: 41
    }
  ];

  const getTypeColor = (type: string) => {
    return type === 'Journal' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground';
  };

  return (
    <section id="publications" className="section-padding bg-ieee-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our research contributions to the IEEE community and global scientific knowledge base.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {publications.map((publication, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-display text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {publication.title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{publication.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{publication.year}</span>
                      </div>
                    </div>
                    
                    <p className="font-medium text-primary mb-2">{publication.journal}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getTypeColor(publication.type)}>
                      {publication.type}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {publication.citations} citations
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {publication.abstract}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">DOI:</span> {publication.doi}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      View PDF
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      IEEE Xplore
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-background rounded-2xl p-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">25+</h3>
            <p className="text-sm text-muted-foreground">Total Publications</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <ExternalLink className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">350+</h3>
            <p className="text-sm text-muted-foreground">Total Citations</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">15+</h3>
            <p className="text-sm text-muted-foreground">Contributing Authors</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">3</h3>
            <p className="text-sm text-muted-foreground">Years Active</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;