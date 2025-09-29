import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Calendar, MapPin, Image, Edit, Trash2, Upload } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  photos: string[];
  createdBy: string;
  createdAt: string;
}

interface EventManagementProps {
  user: any;
}

const EventManagement: React.FC<EventManagementProps> = ({ user }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    venue: '',
    description: ''
  });
  const [eventPhotos, setEventPhotos] = useState<File[]>([]);
  const [previewPhotos, setPreviewPhotos] = useState<string[]>([]);
  const { toast } = useToast();

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('ieeeEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Save events to localStorage
  const saveEvents = (newEvents: Event[]) => {
    setEvents(newEvents);
    localStorage.setItem('ieeeEvents', JSON.stringify(newEvents));
  };

  const handleInputChange = (field: string, value: string) => {
    setEventForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setEventPhotos(files);
    
    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewPhotos(previews);
  };

  const resetForm = () => {
    setEventForm({ title: '', date: '', venue: '', description: '' });
    setEventPhotos([]);
    setPreviewPhotos([]);
    setIsAddingEvent(false);
    setEditingEvent(null);
  };

  const handleAddEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.venue) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const newEvent: Event = {
      id: Date.now().toString(),
      title: eventForm.title,
      date: eventForm.date,
      venue: eventForm.venue,
      description: eventForm.description,
      photos: previewPhotos, // In a real app, these would be uploaded to a server
      createdBy: user.name,
      createdAt: new Date().toISOString()
    };

    const updatedEvents = [...events, newEvent];
    saveEvents(updatedEvents);
    
    toast({
      title: 'Success',
      description: 'Event added successfully!',
      variant: 'default'
    });
    
    resetForm();
  };

  const handleEditEvent = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setEventForm({
        title: event.title,
        date: event.date,
        venue: event.venue,
        description: event.description
      });
      setPreviewPhotos(event.photos);
      setEditingEvent(eventId);
      setIsAddingEvent(true);
    }
  };

  const handleUpdateEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.venue) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const updatedEvents = events.map(event =>
      event.id === editingEvent
        ? { ...event, ...eventForm, photos: previewPhotos }
        : event
    );
    
    saveEvents(updatedEvents);
    
    toast({
      title: 'Success',
      description: 'Event updated successfully!',
      variant: 'default'
    });
    
    resetForm();
  };

  const handleDeleteEvent = (eventId: string) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    saveEvents(updatedEvents);
    
    toast({
      title: 'Success',
      description: 'Event deleted successfully!',
      variant: 'default'
    });
  };

  if (!user?.isOfficeBearer) {
    return (
      <Card className="card-shadow">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">
            Event management is available only for office bearers.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold text-foreground">
          Event Management
        </h2>
        <Button onClick={() => setIsAddingEvent(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Event
        </Button>
      </div>

      {/* Add/Edit Event Form */}
      {isAddingEvent && (
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="font-display">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter event title"
                  value={eventForm.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="date">Event Date *</Label>
                <Input
                  id="date"
                  type="datetime-local"
                  value={eventForm.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="venue">Venue *</Label>
              <Input
                id="venue"
                placeholder="Enter event venue"
                value={eventForm.venue}
                onChange={(e) => handleInputChange('venue', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter event description"
                value={eventForm.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="photos">Event Photos</Label>
              <Input
                id="photos"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/80"
              />
              {previewPhotos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {previewPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button onClick={editingEvent ? handleUpdateEvent : handleAddEvent}>
                {editingEvent ? 'Update Event' : 'Add Event'}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="card-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-display text-lg">{event.title}</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditEvent(event.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleString()}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.venue}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {event.description && (
                <p className="text-muted-foreground mb-4">{event.description}</p>
              )}
              
              {event.photos.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Image className="w-4 h-4 mr-2" />
                    {event.photos.length} photos
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {event.photos.slice(0, 3).map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Event photo ${index + 1}`}
                        className="w-full h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Added by {event.createdBy}</span>
                  <Badge variant="outline">
                    {new Date(event.createdAt).toLocaleDateString()}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {events.length === 0 && !isAddingEvent && (
        <Card className="card-shadow">
          <CardContent className="p-8 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              No events have been added yet.
            </p>
            <Button onClick={() => setIsAddingEvent(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Event
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EventManagement;