'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation'; // For potential redirect

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to MyApp!</CardTitle>
          <CardDescription>
            Your one-stop solution for amazing things.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {session ? (
            <div>
              <p className="text-lg mb-2">
                Hello, {session.user?.name || session.user?.email}!
              </p>
              <p className="mb-4">
                You are logged in. You can proceed to your dashboard.
              </p>
              <Link href="/dashboard" passHref>
                <Button size="lg">Go to Dashboard</Button>
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-lg mb-4">
                Please log in to access your personalized dashboard and features.
              </p>
              <Link href="/login" passHref>
                <Button size="lg">Login</Button>
              </Link>
            </div>
          )}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              Explore public features or learn more about us.
            </p>
            {/* Add more public links or info here if needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
