
"use client"
import { signUp, signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import toast from "react-hot-toast"

const inputClass = (hasError) =>
  `h-[43px] w-full rounded-md border bg-transparent px-3 text-sm outline-none transition ${
    hasError ? "border-red-500 focus:border-red-500" : "border-[#E1E8E1] focus:border-[#078B43]"
  }`

const Field = ({ id, label, type = "text", placeholder, error, onChange }) => (
  <div>
    <label htmlFor={id} className="mb-1 block text-sm font-medium text-[#26332A]">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={inputClass(!!error)}
    />
    {error && (
      <div className="mt-1 space-y-0.5 text-xs text-red-500">
        {String(error)
          .split("\n")
          .map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
      </div>
    )}
  </div>
)

const validate = (v) => {
  const errors = {}
  const name = v.name?.trim() || ""
  if (!name) errors.name = "নাম লিখুন"
  else if (name.length < 4) errors.name = "নাম কমপক্ষে ৪ অক্ষরের হতে হবে"

  const email = v.email?.trim() || ""
  if (!email) errors.email = "ইমেইল লিখুন"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "সঠিক ইমেইল লিখুন"

  const password = v.password || ""
  if (!password) {
    errors.password = "পাসওয়ার্ড লিখুন"
  } else {
    const passwordErrors = []

    if (password.length < 8)
      passwordErrors.push("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে")
    if (!/[A-Z]/.test(password))
      passwordErrors.push("পাসওয়ার্ডে অন্তত একটি বড় হাতের অক্ষর (A-Z) থাকতে হবে")
    if (!/[^A-Za-z0-9]/.test(password))
      passwordErrors.push("পাসওয়ার্ডে অন্তত একটি বিশেষ চিহ্ন (@ বা . ইত্যাদি) থাকতে হবে")

    if (passwordErrors.length > 0) errors.password = passwordErrors.join("\n")
  }
  if (!v.confirmPassword) errors.confirmPassword = "পাসওয়ার্ড আবার লিখুন"
  else if (v.confirmPassword !== password) errors.confirmPassword = "পাসওয়ার্ড মিলছে না"

  return errors
}

const Page = () => {
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const clearError = (field) => () =>
    setErrors((prev) => ({ ...prev, [field]: undefined }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const { confirmPassword, ...user } = Object.fromEntries(formData.entries())

    const foundErrors = validate({ ...user, confirmPassword })
    setErrors(foundErrors)
    if (!user.name?.trim() || !user.email?.trim() || !user.password || !confirmPassword) {
      toast.error("সবগুলো ঘর পূরণ করুন")
      return
    }

    if (Object.keys(foundErrors).length > 0) {
      const firstError = Object.values(foundErrors).find(Boolean)
      toast.error(firstError, { style: { whiteSpace: "pre-line" } })
      return
    }

    setLoading(true)
    const { data, error } = await signUp.email({
      ...user,
      name: user.name.trim(),
      email: user.email.trim(),
      callbackURL: "/",
    })
    setLoading(false)

    if (error) {
      const isDuplicate =
        error.code === "USER_ALREADY_EXISTS" ||
        error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL" ||
        error.status === 422

      if (isDuplicate) {
        setErrors({ email: "এই ইমেইল আগেই ব্যবহার করা হয়েছে" })
        toast.error("এই ইমেইল আগেই ব্যবহার করা হয়েছে, অন্য ইমেইল দিন")
      } else {
        toast.error(error.message || "কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন")
      }
      return
    }

    if (data) {
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে")
      router.push("/")
    }
  }

  const handleIn = async () => {
    const { error } = await signIn.social({ provider: "google", callbackURL: "/" })
    if (error) toast.error(error.message || "Google দিয়ে লগিন করা যায়নি")
  }

  const handleGit = async () => {
    const { error } = await signIn.social({ provider: "github", callbackURL: "/" })
    if (error) toast.error(error.message || "GitHub দিয়ে লগিন করা যায়নি")
  }

  return (
    <div className="min-h-screen bg-[#F0F5F0] px-4 py-6 font-bangla">
      <div className="mx-auto max-w-[414px]">
        <div className="mb-5 text-center">
          <h1 className="text-[24px] font-bold text-[#1D271F]">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="mt-1 text-sm text-[#758078]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        <div className="min-h-[536px] w-full rounded-[14px] border border-[#E1E8E1] bg-[#FAFCFA] p-4">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <Field
              id="name"
              label="নাম"
              placeholder="যেমন: রহিম উদ্দিন"
              error={errors.name}
              onChange={clearError("name")}
            />
            <Field
              id="email"
              label="ইমেইল"
              type="email"
              placeholder="you@example.com"
              error={errors.email}
              onChange={clearError("email")}
            />
            <Field
              id="password"
              label="পাসওয়ার্ড"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              error={errors.password}
              onChange={clearError("password")}
            />
            <Field
              id="confirmPassword"
              label="পাসওয়ার্ড নিশ্চিত করুন"
              type="password"
              placeholder="আবার লিখুন"
              error={errors.confirmPassword}
              onChange={clearError("confirmPassword")}
            />

            <button
              type="submit"
              disabled={loading}
              className="h-[44px] w-full rounded-md bg-[#078B43] text-sm font-semibold text-white shadow-md transition hover:bg-[#06783A] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </form>

          <div className="my-3 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E1E8E1]" />
            <span className="text-xs text-[#758078]">অথবা</span>
            <div className="h-px flex-1 bg-[#E1E8E1]" />
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleIn}
              className="flex h-[43px] items-center justify-center gap-2 rounded-md border border-[#E1E8E1] text-xs font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
            >
              <span className="text-base font-bold text-[#4285F4]">G</span>
              Google দিয়ে লগিন
            </button>
            <button
              type="button"
              onClick={handleGit}
              className="flex h-[43px] items-center justify-center gap-2 rounded-md border border-[#E1E8E1] text-xs font-medium text-[#26332A] transition hover:bg-[#F0F5F0]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.4 3.97 1.7.1-.73.4-1.23.72-1.51-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.7.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.31-2.63 5.26-5.14 5.54.4.35.77 1.03.77 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
              GitHub দিয়ে লগিন
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-[#758078]">
            অ্যাকাউন্ট আছে?{" "}
            <a href="/signin" className="font-medium text-[#078B43] hover:underline">
              সাইন ইন করুন
            </a>
          </p>
        </div>

        <div className="mt-5 mb-10 text-center">
          <a href="/" className="text-sm text-[#758078] transition hover:text-[#078B43]">
            ← হোম পেজে ফিরে যান
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page