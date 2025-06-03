'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect } from 'react';
// Placeholder for potential Shadcn Table components if we add them later
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
      redirect('/login'); // Redirect if not authenticated
    }
    // Add role check here in the future if available in session
    // For example: if (session?.user?.role !== 'admin') redirect('/dashboard');
  }, [session, status]);

  if (status === 'loading') {
    return <p>Loading admininstrative data...</p>; // Or a spinner component
  }

  if (!session) {
    return null; // Avoid rendering before redirect
  }

  // Future: Add admin role check here before rendering sensitive content
  // if (session.user?.role !== 'admin') {
  //   return (
  //     <div className="container mx-auto p-4">
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Access Denied</CardTitle>
  //           <CardDescription>You do not have permission to view this page.</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <p>Please contact an administrator if you believe this is an error.</p>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
          <CardDescription>Manage users, settings, and other administrative tasks.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-_4">Welcome, Administrator {session.user?.name || session.user?.email}!</p>
          <p>This is the protected admin area.</p>
          {/* Placeholder for admin content, e.g., a table of users or settings */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">User Management (Placeholder)</h3>
            {/* <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Edit / Delete</TableCell>
                </TableRow>
              </TableBody>
            </Table> */}
            <p className="text-muted-foreground">User table will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
