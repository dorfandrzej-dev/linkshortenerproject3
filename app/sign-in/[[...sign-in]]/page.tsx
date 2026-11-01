import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense fallback={<div className="h-96 w-full max-w-md rounded-xl bg-slate-800 animate-pulse" />}>
        <SignIn />
      </Suspense>
    </div>
  );
}
