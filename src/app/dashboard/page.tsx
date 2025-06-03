'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
      redirect('/login'); // Redirect if not authenticated
    }
  }, [session, status]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Or a spinner component
  }

  if (!session) {
    return null; // Avoid rendering anything sensitive before redirect
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome, {session.user?.name || session.user?.email}!</p>
          <p>This is your protected dashboard.</p>
          {/* Placeholder for dashboard content */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader><CardTitle>Metric 1</CardTitle></CardHeader>
              <CardContent><p>Some data here...</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Metric 2</CardTitle></CardHeader>
              <CardContent><p>Some data here...</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Another Item</CardTitle></CardHeader>
              <CardContent><p>Details...</p></CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
