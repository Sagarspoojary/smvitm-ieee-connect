# IEEE Student Branch - SMVITM Website

A modern, responsive website for IEEE Student Branch at Shri Madhwa Vadiraja Institute of Technology and Management, built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

### Core Pages & Sections
- **Home**: Hero section with IEEE branding and call-to-action
- **About Us**: Mission, vision, and what we do
- **Team**: Office bearers with photos, roles, and contact links
- **Achievements**: Awards and recognitions in card format
- **Publications**: Research papers and IEEE publications
- **IEEE Societies**: ComSoc, Computer Society, SIGHT, WIE

### Navigation
- Sticky top navigation bar
- Responsive hamburger menu for mobile devices
- Smooth scrolling to sections
- User authentication status display

### Authentication System
- Demo login system using localStorage
- Role-based access (Member vs Office Bearer)
- Persistent login sessions

### Event Management (Office Bearers Only)
- Add/Edit/Delete events
- Upload event photos with client-side preview
- Event details: title, date, venue, description
- Event history and management

### Notification System
- In-page notification bell with unread count
- JavaScript popup notifications for new events
- Mark as read/unread functionality
- Different notification types and priorities

## 🔐 Demo Login Credentials

### Member Access
- **Email**: `member@smvitm.edu`
- **Password**: `member123`
- **Access**: View all content, receive notifications

### Office Bearer Access  
- **Email**: `president@smvitm.edu`
- **Password**: `ieeepres2025`
- **Access**: All member features + Event Management + Admin notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ieee-student-branch-smvitm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🎨 Design System

### Colors (IEEE Brand)
- **Primary**: IEEE Blue (#0033A0)
- **Accent**: IEEE Light Blue (#0072CE) 
- **Background**: White (#FFFFFF)
- **Secondary**: Light Gray (#F5F7FA)

### Typography
- **Headings**: Montserrat (400, 500, 600, 700)
- **Body Text**: Open Sans (400, 500, 600)

### Layout
- **Mobile-first responsive design**
- **CSS Grid and Flexbox layouts**
- **No absolute positioning overlaps**
- **Consistent spacing with section padding**

## 📱 Responsive Breakpoints

- **Mobile**: max-width 600px (1-column layout)
- **Tablet**: 601px - 992px (2-column layout) 
- **Desktop**: 992px+ (3-4 column layout)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui + Custom Components
- **Build Tool**: Vite
- **State Management**: React useState/useEffect + localStorage
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Custom toast system

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AboutSection.tsx # About us content
│   ├── TeamSection.tsx  # Team members display
│   ├── AchievementsSection.tsx
│   ├── PublicationsSection.tsx
│   ├── SocietiesSection.tsx
│   ├── EventManagement.tsx
│   ├── LoginModal.tsx
│   ├── NotificationSystem.tsx
│   └── Footer.tsx
├── pages/               # Page components
│   └── Index.tsx        # Main page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app component
├── index.css            # Global styles & design system
└── main.tsx             # App entry point
```

## ✨ Key Features Implemented

### Responsive Design
- ✅ Mobile-first approach with proper breakpoints
- ✅ Hamburger menu for mobile navigation
- ✅ Flexible grid layouts (1/2/3/4 columns)
- ✅ Proper image scaling and responsive images

### Layout & Spacing
- ✅ CSS Grid/Flexbox (no absolute positioning)
- ✅ Consistent section padding (60px/40px desktop/mobile)
- ✅ 40px margin between sections
- ✅ No overlapping elements

### Authentication & User Management
- ✅ localStorage-based demo authentication
- ✅ Role-based access control
- ✅ Persistent login sessions
- ✅ User profile display in navigation

### Event Management System
- ✅ CRUD operations for events
- ✅ Photo upload with client-side preview
- ✅ Form validation and error handling
- ✅ Event filtering and management

### Notification System
- ✅ Real-time notification bell with badge
- ✅ Popup notifications for new events
- ✅ Mark as read/unread functionality
- ✅ Notification history and management

## 🎯 Usage Instructions

1. **Browse the website** as a visitor to see all public content
2. **Login as Member** to see notification features and member content
3. **Login as Office Bearer** to access event management tools
4. **Add events** using the event management interface (office bearers only)
5. **Receive notifications** for new events and updates
6. **Navigate sections** using the sticky navigation or scroll

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to the main `Index.tsx` page
3. Update navigation links if needed

### Modifying Design System
1. Update colors in `src/index.css` (CSS variables)
2. Modify Tailwind config in `tailwind.config.ts`
3. Use semantic color tokens throughout components

### Adding New User Roles
1. Update the demo users array in `LoginModal.tsx`
2. Add role-based logic in components
3. Update TypeScript interfaces as needed

## 📄 License

© 2025 IEEE Student Branch – SMVITM. All rights reserved.

---

**Built with ❤️ by IEEE Student Branch - SMVITM**

*Advancing Technology for Humanity*