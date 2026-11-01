"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Link2,
  LockKeyhole,
  Sparkles,
  Layers3,
} from "lucide-react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AuthHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-lime-300/[0.08] blur-[120px]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Shortly home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-lime-300 text-[#11160d]">
            <Link2 aria-hidden="true" className="size-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">shortly</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            How it works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-lime-300 text-[#11160d] hover:bg-lime-200">
                Get started <ArrowUpRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Button
              render={<Link href="/dashboard" />}
              className="bg-lime-300 text-[#11160d] hover:bg-lime-200"
            >
              Dashboard <ArrowRight aria-hidden="true" />
            </Button>
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-24">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-200/15 bg-lime-200/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-lime-200">
            <Sparkles aria-hidden="true" className="size-3.5" />
            YOUR LINKS, A LITTLE MORE YOU
          </div>
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Make every
            <br />
            link <span className="text-lime-300">count.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Turn long URLs into tidy links that are easy to share. Keep them
            together in a workspace made for the way you work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-lime-300 px-6 text-sm font-semibold text-[#11160d] hover:bg-lime-200"
                >
                  Create your workspace <ArrowUpRight aria-hidden="true" />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <Button
                render={<Link href="/dashboard" />}
                size="lg"
                className="h-12 rounded-xl bg-lime-300 px-6 text-sm font-semibold text-[#11160d] hover:bg-lime-200"
              >
                Go to your links <ArrowRight aria-hidden="true" />
              </Button>
            </Show>
          </div>
          <p className="mt-5 flex items-center gap-2 text-xs text-white/40">
            <LockKeyhole aria-hidden="true" className="size-3.5" />
            A personal space for the links you share.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[2.5rem] bg-lime-300/[0.06] blur-3xl"
          />
          <Card
            role="img"
            aria-label="Example workspace showing two shortened links"
            className="relative border border-white/10 bg-[#111613] p-1 text-white shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                  <Link2 aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">Your link space</p>
                  <p className="mt-0.5 text-xs text-white/40">Simple, tidy, yours</p>
                </div>
              </div>
              <span className="rounded-full border border-lime-300/20 bg-lime-300/[0.08] px-2.5 py-1 text-[10px] font-medium text-lime-200">
                READY TO SHARE
              </span>
            </div>

            <CardContent className="space-y-3 p-4 sm:p-6">
              <div className="mb-5 flex items-end justify-between px-1">
                <div>
                  <p className="text-xs text-white/45">YOUR LINKS</p>
                  <p className="mt-1 text-lg font-medium tracking-tight">Keep it all together.</p>
                </div>
                <span className="text-xs text-white/35">A little less link clutter</span>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-lime-300/10 text-lime-300">
                    <Link2 aria-hidden="true" className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">Spring collection</p>
                    <p className="mt-1 truncate text-xs text-white/40">
                      yourbrand.com/collections/spring-arrivals
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <span className="truncate rounded-md bg-lime-300/[0.08] px-2 py-1 font-medium text-lime-200">
                        shortly.link/spring
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-white/30" />
                    </div>
                  </div>
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-300/10 text-lime-300">
                    <Check aria-hidden="true" className="size-3" />
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-300/10 text-violet-200">
                    <Link2 aria-hidden="true" className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">Project notes</p>
                    <p className="mt-1 truncate text-xs text-white/40">
                      docs.yourbrand.com/projects/launch-planning
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <span className="truncate rounded-md bg-violet-300/[0.08] px-2 py-1 font-medium text-violet-200">
                        shortly.link/notes
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-white/30" />
                    </div>
                  </div>
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-300/10 text-lime-300">
                    <Check aria-hidden="true" className="size-3" />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-dashed border-white/10 px-4 py-3.5">
                <span className="text-xs text-white/45">Long link, meet its shorter self.</span>
                <span className="flex size-7 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </span>
              </div>
            </CardContent>
          </Card>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#151b17] px-4 py-3 shadow-xl sm:flex">
            <span className="flex size-7 items-center justify-center rounded-full bg-lime-300 text-[#11160d]">
              <Check aria-hidden="true" className="size-4" />
            </span>
            <span className="text-xs font-medium text-white/80">Short, neat, ready to go</span>
          </div>
        </div>

        <Link
          href="#features"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/35 transition-colors hover:text-white/70 lg:flex"
        >
          A little more about Shortly <ArrowDown aria-hidden="true" className="size-3.5" />
        </Link>
      </section>

      <section
        id="features"
        className="relative border-t border-white/[0.07] bg-[#0d110e] px-6 py-20 sm:py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-lime-300">LESS LINK, MORE YOU</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              The little things that make sharing easier.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              A straightforward home for shorter links and a more organized way
              to share what matters.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardHeader>
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                  <Link2 aria-hidden="true" className="size-5" />
                </span>
                <CardTitle className="text-lg">Short and shareable</CardTitle>
                <CardDescription className="leading-6 text-white/50">
                  Turn lengthy URLs into clean, compact links that fit wherever
                  you want to share them.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardHeader>
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                  <Layers3 aria-hidden="true" className="size-5" />
                </span>
                <CardTitle className="text-lg">All in one place</CardTitle>
                <CardDescription className="leading-6 text-white/50">
                  Keep your short links together in a personal workspace, ready
                  to find when you need them.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardHeader>
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                  <LockKeyhole aria-hidden="true" className="size-5" />
                </span>
                <CardTitle className="text-lg">Your own space</CardTitle>
                <CardDescription className="leading-6 text-white/50">
                  Sign in to manage your links in a workspace that is yours,
                  without the clutter.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.18em] text-lime-300">HOW IT WORKS</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              From long URL to easy share.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
              No fuss, no complicated setup. Just a simpler way to keep the
              links you use close at hand.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardContent className="p-5">
                <span className="text-xs font-semibold text-lime-300">01</span>
                <p className="mt-5 text-sm font-medium">Create an account</p>
                <p className="mt-2 text-xs leading-5 text-white/45">
                  Set up your personal workspace.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardContent className="p-5">
                <span className="text-xs font-semibold text-lime-300">02</span>
                <p className="mt-5 text-sm font-medium">Shorten a link</p>
                <p className="mt-2 text-xs leading-5 text-white/45">
                  Make a long URL easier to share.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/[0.08] bg-[#111613] text-white">
              <CardContent className="p-5">
                <span className="text-xs font-semibold text-lime-300">03</span>
                <p className="mt-5 text-sm font-medium">Keep it close</p>
                <p className="mt-2 text-xs leading-5 text-white/45">
                  Find your links in one place.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-lime-200/10 bg-[linear-gradient(110deg,rgba(190,242,100,0.09),rgba(17,22,19,0.9)_55%)] p-7 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-lime-300">MAKE ROOM FOR BETTER SHARING</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
              Your next link deserves a little less clutter.
            </h2>
          </div>
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="h-12 shrink-0 rounded-xl bg-lime-300 px-6 font-semibold text-[#11160d] hover:bg-lime-200"
              >
                Get started <ArrowUpRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <Button
              render={<Link href="/dashboard" />}
              size="lg"
              className="h-12 shrink-0 rounded-xl bg-lime-300 px-6 font-semibold text-[#11160d] hover:bg-lime-200"
            >
              Open your workspace <ArrowRight aria-hidden="true" />
            </Button>
          </Show>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <Link href="/" className="flex items-center gap-2" aria-label="Shortly home">
            <Link2 aria-hidden="true" className="size-4 text-lime-300" />
            <span className="font-medium text-white/65">shortly</span>
          </Link>
          <p>Short links. A little more room to share.</p>
        </div>
      </footer>
    </main>
  );
}
