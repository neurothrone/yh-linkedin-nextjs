# LinkedIn OAuth Integration with Next.js

## Summary of Changes

This project implements a LinkedIn OAuth integration using Next.js 15+, TypeScript, Tailwind CSS v4, and NextAuth.js.

### Updates for Next.js 15 and NextAuth Beta

The implementation has been updated to work with Next.js 15 and NextAuth beta:

1. Updated the NextAuth configuration to use the new API format
2. Exported `auth`, `signIn`, and `signOut` functions from the auth route
3. Used the proper imports for authentication functions in client components
4. Replaced `getServerSession` with the new `auth()` function

### Project Structure

- **app/**: Contains the main application code
  - **api/auth/[...nextauth]/**: NextAuth configuration for LinkedIn OAuth
  - **components/**: React components used in the application
  - **providers.tsx**: Authentication provider setup
  - **page.tsx**: Main landing page
- **public/**: Static assets like the LinkedIn logo
- **types/**: TypeScript type definitions

### Key Features

1. **OAuth Integration**:

   - LinkedIn OAuth flow using NextAuth.js
   - Server-side authentication with secure token exchange
   - JWT for session management

2. **User Profile Display**:

   - Fetches and displays the user's:
     - Full Name
     - Profile Picture
     - Email Address
   - Displays user data after successful authentication

3. **UI Components**:
   - Landing page with "Connect with LinkedIn" button
   - Loading state indicators during authentication
   - User profile display after successful login
   - Sign out button to clear the session

### Environment Configuration

The app requires the following environment variables in `.env.local`:

- `NEXTAUTH_URL`: The base URL of your Next.js application
- `NEXTAUTH_SECRET`: Secret key for JWT encryption
- `LINKEDIN_CLIENT_ID`: OAuth client ID from LinkedIn Developer Portal
- `LINKEDIN_CLIENT_SECRET`: OAuth client secret from LinkedIn Developer Portal

### Technology Stack

- **Next.js 15+**: Using the App Router for modern React application
- **TypeScript**: For type safety and developer experience
- **Tailwind CSS v4**: For modern, efficient styling
- **NextAuth.js Beta**: For simplified OAuth implementation

### Security Considerations

- OAuth token exchange happens server-side only
- No client-side exposure of secrets
- Session data is stored in JWT cookies
- No long-term storage of user data
