import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignInButton from "@/app/components/SignInButton"; // Assuming this is the client component with signIn logic

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          {/* We will use the existing LoginButton or adapt its logic here */}
          {/* For now, a placeholder button or the actual LoginButton if it's simple enough to drop in */}
              <SignInButton />
          {/* Or, if LoginButton is just a button, we might need a form element wrapping this
               and handle submission. For now, assuming LoginButton handles its own logic
               or we will refine this in a subsequent step.
          */}
        </CardFooter>
      </Card>
    </div>
  );
}
