# Instagram Tracker - Full Stack Web Application

A modern full-stack web application built with Next.js (frontend) and Nest.js (backend) for tracking and analyzing Instagram profiles.

## 🚀 Features

### Frontend (Next.js)
- **Landing Page**: Beautiful rotating profile images slider with network visualization
- **Track People Section**: Clean call-to-action with "Start Analyze" button
- **Instagram Login Page**: Secure login form with username/password fields
- **Dashboard**: Comprehensive analytics dashboard with:
  - Profile statistics and metrics
  - Recent activity feed
  - Top performing posts
  - Quick actions panel
  - Account summary

### Backend (Nest.js)
- **Authentication System**: JWT-based authentication with login/register
- **User Management**: Complete CRUD operations for users
- **Instagram Integration**: Profile tracking and analytics endpoints
- **API Documentation**: Swagger/OpenAPI documentation
- **Security**: Password hashing, CORS, validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons

### Backend
- **Nest.js** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **JWT** - JSON Web Tokens for authentication
- **Passport** - Authentication middleware
- **Swagger** - API documentation
- **Class Validator** - DTO validation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment file:
   ```bash
   cp env.example .env
   ```

4. Update the `.env` file with your configuration

5. Start the development server:
   ```bash
   npm run start:dev
   ```

6. The API will be available at [http://localhost:3001](http://localhost:3001)
7. API documentation at [http://localhost:3001/api](http://localhost:3001/api)

## 🎨 UI/UX Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Aesthetics**: Clean, minimalist design with light colors
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Loading States**: Visual feedback during API calls

## 🔐 Authentication Flow

1. User clicks "Start Analyze" on landing page
2. Redirected to Instagram login page
3. User enters credentials (dummy for now)
4. After successful login, redirected to dashboard
5. Dashboard shows comprehensive analytics and insights

## 📊 Dashboard Features

- **Statistics Cards**: Followers, engagement rate, posts, profile views
- **Activity Feed**: Real-time updates on profile interactions
- **Top Posts**: Visual grid of best-performing content
- **Quick Actions**: Easy access to common tasks
- **Account Summary**: Key account information and status

## 🚀 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile
- `POST /auth/logout` - User logout

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Instagram
- `POST /instagram/track` - Track Instagram profile
- `GET /instagram/profiles` - Get tracked profiles
- `GET /instagram/analytics/:profileId` - Get profile analytics
- `GET /instagram/insights/:profileId` - Get profile insights

## 🔧 Development

### Frontend Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend Development
```bash
npm run start:dev    # Start development server with hot reload
npm run build        # Build the application
npm run start:prod   # Start production server
npm run lint         # Run ESLint
npm run test         # Run unit tests
```

## 📝 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── login/             # Login page
│   └── dashboard/         # Dashboard page
├── backend/               # Nest.js backend
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── users/         # Users module
│   │   ├── instagram/     # Instagram module
│   │   ├── app.module.ts  # Main app module
│   │   └── main.ts        # Application entry point
│   └── package.json
├── package.json           # Frontend dependencies
├── tailwind.config.js     # TailwindCSS configuration
└── README.md
```

## 🎯 Future Enhancements

- [ ] Real Instagram API integration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time notifications
- [ ] Advanced analytics and reporting
- [ ] User roles and permissions
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Social media scheduling
- [ ] Competitor analysis
- [ ] Export functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This is a demo application. The Instagram integration is currently mocked for demonstration purposes. In a production environment, you would need to integrate with the official Instagram API and implement proper authentication flows.
