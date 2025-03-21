"use client";

import { Session } from "next-auth";
import { SignOutButton } from "./SignOutButton";
import { useEffect, useState } from "react";

interface UserProfileProps {
  session: Session;
}

export function UserProfile({ session }: UserProfileProps) {
  const { user } = session;
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    // Log session data for debugging
    console.log("Session:", session);

    // Find and extract the image URL from session data
    if (user?.image) {
      setImgSrc(user.image);
    } else if (user?.linkedInProfile?.picture) {
      setImgSrc(user.linkedInProfile.picture);
    } else if (typeof user?.linkedInProfile === "object") {
      // Try to find any picture field in the LinkedIn profile data
      const profileData = user.linkedInProfile;
      const possibleImageKeys = [
        "picture",
        "profilePicture",
        "profileImageUrl",
        "photo",
        "avatar",
      ];

      for (const key of possibleImageKeys) {
        if (profileData[key]) {
          setImgSrc(profileData[key]);
          break;
        }
      }
    }
  }, [session, user]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {imgSrc ? (
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-blue-100">
            <img
              src={imgSrc}
              alt={user?.name || "Profile picture"}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load image:", imgSrc);
                e.currentTarget.style.display = "none";
              }}
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

      {/* Debug section - shows complete session data with better styling */}
      <div className="mt-4 p-4 bg-white rounded-md text-xs overflow-auto border border-gray-200">
        <details>
          <summary className="cursor-pointer text-blue-600 font-medium">
            Session Data
          </summary>
          <pre className="mt-2 whitespace-pre-wrap overflow-x-auto text-black font-mono">
            {JSON.stringify(session, null, 2)}
          </pre>
        </details>

        {imgSrc && (
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-gray-800 font-medium mb-1">Image URL:</p>
            <p className="text-black break-all font-mono">{imgSrc}</p>
            <div className="mt-2">
              <p className="text-gray-800 font-medium mb-1">
                Direct Image Link:
              </p>
              <a
                href={imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all font-mono"
              >
                Open Image URL in New Tab
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
