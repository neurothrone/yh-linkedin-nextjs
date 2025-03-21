# LinkedIn OAuth Integration with Next.js

This project demonstrates how to integrate LinkedIn OAuth 2.0 authentication with Next.js 15+ and TypeScript. After successful authentication, the app displays basic profile information from the user's LinkedIn account.

## Features

- LinkedIn OAuth 2.0 authentication using NextAuth.js
- Display of user profile information (name, profile picture, email)
- Responsive design with Tailwind CSS v4
- TypeScript for type safety
- Sign out functionality

## Prerequisites

- Node.js 18.17.0 or later
- A LinkedIn Developer account with registered application
- Basic knowledge of Next.js and React

## Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/yh-linkedin-nextjs.git
cd yh-linkedin-nextjs
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory with the following variables:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# LinkedIn OAuth Credentials
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret
```

4. **Create a LinkedIn OAuth application:**

- Go to the [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps)
- Create a new application
- Set the OAuth 2.0 redirect URL to `http://localhost:3000/api/auth/callback/linkedin`
- Copy your Client ID and Client Secret to your `.env.local` file

5. **Start the development server:**

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## How It Works

1. Users are presented with a landing page featuring a "Connect with LinkedIn" button
2. After clicking, they are redirected to LinkedIn's authentication page
3. Upon successful authentication, LinkedIn redirects back to our app with an authorization code
4. NextAuth.js exchanges this code for an access token server-side
5. The access token is used to fetch user profile information
6. The user's profile data is displayed on the screen
7. Users can sign out to clear the session

## Project Structure

- `app/`: Contains the main application code
  - `api/auth/[...nextauth]/`: NextAuth.js API route for authentication
  - `components/`: Reusable UI components
  - `page.tsx`: Main landing page
- `public/`: Static assets
- `types/`: TypeScript type definitions

## Technologies Used

- Next.js 15+ with App Router
- TypeScript
- Tailwind CSS v4
- NextAuth.js for authentication

## License

This project is MIT licensed.
