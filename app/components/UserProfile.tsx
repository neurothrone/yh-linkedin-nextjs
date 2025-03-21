"use client";

import { Session } from "next-auth";
import Image from "next/image";
import { SignOutButton } from "./SignOutButton";
import { useEffect } from "react";

interface UserProfileProps {
  session: Session;
}

export function UserProfile({ session }: UserProfileProps) {
  const { user } = session;

  useEffect(() => {
    // Log session data for debugging
    console.log("Session:", session);
  }, [session]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {user?.image ? (
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
            <Image
              src={user.image}
              alt={user.name || "Profile picture"}
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        ) : (
          <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        )}

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.name || "User"}
          </h2>
          {user?.email && <p className="text-gray-600">{user.email}</p>}
        </div>
      </div>

      {/* Debug section - shows complete session data */}
      <div className="mt-4 p-4 bg-gray-100 rounded-md text-xs overflow-auto">
        <details>
          <summary className="cursor-pointer text-blue-600">
            Session Data
          </summary>
          <pre className="mt-2 whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </details>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
