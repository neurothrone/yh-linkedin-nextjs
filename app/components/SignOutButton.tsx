"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-70"
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span>Signing out...</span>
        </>
      ) : (
        <span>Sign Out</span>
      )}
    </button>
  );
}
