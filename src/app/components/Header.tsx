'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button'; // For login/logout buttons
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Optional: for user avatar

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          MyApp
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <Button variant="ghost">Home</Button>
          </Link>

          {isLoading ? (
            <div className="h-8 w-20 animate-pulse bg-muted rounded-md"></div> // Placeholder for loading state
          ) : session ? (
            <>
              <Link href="/dashboard" passHref>
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/admin" passHref>
                <Button variant="ghost">Admin</Button>
              </Link>
              {/* Optional: User Avatar and Name */}
              {/* <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  {session.user?.image && <AvatarImage src={session.user.image} alt={session.user.name || 'User'} />}
                  <AvatarFallback>
                    {session.user?.name?.charAt(0).toUpperCase() || session.user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{session.user?.name || session.user?.email}</span>
              </div> */}
              <Button variant="outline" onClick={() => signOut()}>Logout</Button>
            </>
          ) : (
            <Button onClick={() => signIn()}>Login</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
