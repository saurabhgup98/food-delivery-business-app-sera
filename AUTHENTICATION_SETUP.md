# Authentication Integration Setup

This document explains how to configure and use the authentication integration with your deployed authentication backend.

## Configuration

### 1. Environment Variables

Create a `.env` file in the root directory of your SERA business app:

```env
# API Configuration
VITE_API_BASE_URL=https://your-auth-backend.vercel.app
```

Replace `https://your-auth-backend.vercel.app` with your actual deployed authentication backend URL.

### 2. Backend Configuration

Make sure your authentication backend has the following CORS configuration in the `simple-authentication` project:

```javascript
// In src/index.js
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'https://your-sera-app.vercel.app'  // Add your SERA app URL here
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

## Features Implemented

### 1. API Service (`src/services/api.ts`)
- Complete authentication API client
- Token management (access & refresh tokens)
- Automatic token refresh
- OAuth integration support
- Error handling

### 2. Authentication Context (`src/contexts/AuthContext.tsx`)
- Global authentication state management
- User session persistence
- Automatic token refresh
- Login/logout functionality
- Error handling

### 3. Updated Components

#### AuthModals Component
- Real API integration for login/register
- Form validation
- Loading states
- Error display
- OAuth redirect support

#### Header Component
- Authentication state integration
- Dynamic user profile display
- Logout functionality

## API Endpoints Used

The integration uses these endpoints from your authentication backend:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Token refresh
- `GET /api/oauth/google` - Google OAuth
- `GET /api/oauth/facebook` - Facebook OAuth

## Usage

### 1. Login/Register
Users can now:
- Click "Login" or "Register" buttons in the header
- Fill out the authentication forms
- Use OAuth providers (Google, Facebook)
- See real-time validation and error messages

### 2. Authentication State
- User authentication state is automatically managed
- Tokens are stored securely in localStorage
- Automatic token refresh prevents session expiration
- User profile information is displayed in the header

### 3. Protected Routes
The authentication context provides:
- `isAuthenticated` - Boolean indicating login status
- `user` - Current user object
- `login()` - Login function
- `register()` - Registration function
- `logout()` - Logout function

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the authentication flow:
   - Try registering a new user
   - Try logging in with existing credentials
   - Test OAuth providers (if configured)
   - Verify logout functionality

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your backend CORS configuration includes your frontend URL
   - Check that credentials are enabled

2. **API Connection Issues**
   - Verify the `VITE_API_BASE_URL` environment variable
   - Check that your backend is deployed and accessible

3. **Token Issues**
   - Check browser localStorage for stored tokens
   - Verify token expiration times in your backend

### Debug Mode

The authentication context includes console logging for debugging:
- Authentication state changes
- Token refresh attempts
- API request/response details

## Security Notes

- Tokens are stored in localStorage (consider httpOnly cookies for production)
- Automatic token refresh prevents session expiration
- CORS is properly configured for security
- Rate limiting is handled by the backend

## Next Steps

1. Configure OAuth providers in your backend
2. Add email verification flow
3. Implement password reset functionality
4. Add role-based access control
5. Consider implementing httpOnly cookies for enhanced security
