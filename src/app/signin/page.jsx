"use client"

import { signIn } from "@/lib/auth-client"

const page = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        console.log(user);
        const { data, error } = await signIn.email({
            ...user,
            callbackURL : "/"
        })
       
       
    }
    
  return (
    
    <div className="min-h-screen bg-[#F0F5F0] px-4 py-6 font-bangla">
  <div className="mx-auto max-w-[414px]">

    <div className="mb-6 text-center">
      <h1 className="text-[24px] font-bold text-[#1D271F]">
        সাইন ইন
      </h1>

      <p className="mt-1 text-sm text-[#758078]">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
    </div>

    <div className="min-h-[536px] w-full rounded-[16px] border border-[#E1E8E1] bg-[#FAFCFA] p-6">

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[#26332A]"
          >
            ইমেইল
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="h-[40px] w-full rounded-lg border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-[#26332A]"
          >
            পাসওয়ার্ড
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            required
            className="h-[40px] w-full rounded-lg border border-[#E1E8E1] bg-transparent px-3 text-sm outline-none transition focus:border-[#078B43]"
          />
        </div>

        <button 
          type="submit"
          className="h-[42px] w-full rounded-lg bg-[#078B43] text-sm font-semibold text-white shadow-md transition hover:bg-[#06783A] active:scale-[0.99]"
        >
          সাইন ইন
        </button>
      </form>

      <div className="my-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#E1E8E1]" />

        <span className="text-sm text-[#758078]">
          অথবা
        </span>

        <div className="h-px flex-1 bg-[#E1E8E1]" />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

        <button
          type="button"
          className="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-[#E1E8E1] text-sm font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
        >
          <svg viewBox="0 0 48 48" className="h-4 w-4">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.98 46.98 31.8 46.98 24.55Z" />
            <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
          </svg>

          Google দিয়ে চালিয়ে যান
        </button>

        {/* GitHub */}
        <button
          type="button"
          className="flex h-[40px] items-center justify-center gap-2 rounded-lg border border-[#E1E8E1] text-sm font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.4 3.97 1.7.1-.73.4-1.23.72-1.51-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.31-2.63 5.26-5.14 5.54.4.35.77 1.03.77 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
          </svg>

          GitHub দিয়ে চালিয়ে যান
        </button>

      </div>
      <p className="mt-5 text-center text-sm text-[#758078]">
        অ্যাকাউন্ট নেই?{" "}
        <a
          href="/signup"
          className="font-medium text-[#078B43] hover:underline"
        >
          সাইন আপ করুন
        </a>
      </p>

    </div>

    <div className="mt-6 text-center">
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

export default page


