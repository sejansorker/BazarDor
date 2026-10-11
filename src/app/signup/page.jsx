
"use client"
import { authClient, signUp, signIn } from "@/lib/auth-client"
import { redirect } from "next/navigation"
import React from "react"

const Page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries())
    console.log(user);
    const { data, error } = await signUp.email({
        ...user,
        callbackURL : "/"
    })
   if(data){
    redirect("/")
   }
}
const handleIn = async () => {
  const data = await signIn.social ({
    provider: "google",
  });
}
const handleGit = async () => {
  const data = await signIn.social ({
    provider: "github",
     callbackURL: "/",
  });
}
  return (
    <div className="min-h-screen bg-[#F0F5F0] px-4 py-6 font-bangla">
      <div className="mx-auto max-w-[414px]">

        <div className="mb-5 text-center">
          <h1 className="text-[24px] font-bold text-[#1D271F]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-sm text-[#758078]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        <div className="min-h-[536px] w-full rounded-[14px] border border-[#E1E8E1] bg-[#FAFCFA] p-4">

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-[#26332A]"
              >
                নাম
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                className="h-[43px] w-full rounded-md border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[#26332A]"
              >
                ইমেইল
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="h-[43px] w-full rounded-md border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-[#26332A]"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                minLength={8}
                required
                className="h-[43px] w-full rounded-md border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium text-[#26332A]"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="আবার লিখুন"
                minLength={8}
                required
                className="h-[43px] w-full rounded-md border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
              />
            </div>
            <button
              type="submit"
              className="h-[44px] w-full rounded-md bg-[#078B43] text-sm font-semibold text-white shadow-md transition hover:bg-[#06783A] active:scale-[0.99]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>
          <div className="my-3 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E1E8E1]" />

            <span className="text-xs text-[#758078]">
              অথবা
            </span>

            <div className="h-px flex-1 bg-[#E1E8E1]" />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button 
              type="button"
              onClick={handleIn}
              className="flex h-[43px] items-center justify-center gap-2 rounded-md border border-[#E1E8E1] text-xs font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
            >
              <span className="text-base font-bold text-[#4285F4]">
                G
              </span>

              Google দিয়ে লগিন
            </button>
            <button
              type="button"
             onClick={handleGit}
              className="flex h-[43px] items-center justify-center gap-2 rounded-md border border-[#E1E8E1] text-xs font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.4 3.97 1.7.1-.73.4-1.23.72-1.51-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.31-2.63 5.26-5.14 5.54.4.35.77 1.03.77 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>

              GitHub দিয়ে লগিন
            </button>

          </div>
          <p className="mt-4 text-center text-sm text-[#758078]">
            অ্যাকাউন্ট আছে?{" "}
            <a
              href="/signin"
              className="font-medium text-[#078B43] hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </div>
        <div className="mt-5 mb-10 text-center">
          <a
            href="/"
            className="text-sm text-[#758078] transition hover:text-[#078B43]"
          >
            ← হোম পেজে ফিরে যান
          </a>
        </div>

      </div>
    </div>
  )
}

export default Page

