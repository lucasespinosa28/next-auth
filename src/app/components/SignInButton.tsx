"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
  return (
    <Button onClick={() => signIn()} className="w-full">
      Sign In
    </Button>
  );
}
