import { auth } from "./api/auth/[...nextauth]/route";
import { SignInButton } from "./components/SignInButton";
import { UserProfile } from "./components/UserProfile";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <header className="w-full text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            LinkedIn OAuth Demo
          </h1>
          <p className="text-gray-600">
            Connect your LinkedIn account to see your profile information
          </p>
        </header>

        <main className="w-full">
          {session ? (
            <UserProfile session={session} />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center space-y-6">
              <div className="w-20 h-20 text-[#0A66C2]">
                <Image
                  src="/linkedin-logo.svg"
                  alt="LinkedIn Logo"
                  width={80}
                  height={80}
                  className="mb-4"
                  priority
                />
              </div>
              <p className="text-gray-700 text-center mb-4">
                Click the button below to connect your LinkedIn account and view
                your profile information.
              </p>
              <SignInButton />
            </div>
          )}
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Next.js 15 + TypeScript + Tailwind CSS v4 + NextAuth.js</p>
        </footer>
      </div>
    </div>
  );
}
