"use client";

import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function AuthHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-slate-50">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-slate-950/50">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400">LinkShortenerProject</p>
            <h1 className="mt-2 text-3xl font-semibold">Secure your links</h1>
          </div>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

        <p className="mb-8 text-base text-slate-300">
          Sign in to manage your short links and personalize your workspace.
        </p>

        <Show when="signed-out">
          <div className="flex flex-wrap gap-4">
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="outline">Sign up</Button>
            </SignUpButton>
          </div>
        </Show>

        <Show when="signed-in">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            You are signed in and can now manage your short links.
          </div>
        </Show>
      </div>
    </main>
  );
}
