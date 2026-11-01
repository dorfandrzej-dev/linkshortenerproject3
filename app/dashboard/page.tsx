import { Suspense } from "react";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

async function ProtectedDashboard() {
  await auth.protect();

  return (
    <main className="flex items-center justify-between">
      <h1>Dashboard</h1>
      <SignOutButton>
        <Button variant="outline">Log out</Button>
      </SignOutButton>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <ProtectedDashboard />
    </Suspense>
  );
}