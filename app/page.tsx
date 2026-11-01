import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AuthHome } from "@/components/auth-home";

async function RedirectAuthenticatedUser() {
  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return null;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <RedirectAuthenticatedUser />
      </Suspense>
      <AuthHome />
    </>
  );
}
