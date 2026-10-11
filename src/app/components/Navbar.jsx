
"use client"
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { authClient } from '@/lib/auth-client'
import BanglaDate from './BanglaDate'

const Navbar = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে")
          router.push("/")
          router.refresh()
        },
      },
    })
  }

  return (
    <div className="bg-[#F3FBF4] py-2.5 sm:py-[14px]">
      <Container>
        <div className="navbar min-h-0 gap-2 p-0">
          {/* Left: logo + title + date */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center">
              <Link href="/" className="shrink-0">
                <div className="bg-[#05893E] h-9 w-9 sm:h-10 sm:w-10 rounded-[5px] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    height={28}
                    width={18}
                    alt="logo"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </Link>
              <div className="min-w-0 pl-2">
                <h4 className="font-bangla font-bold text-[16px] sm:text-[20px] leading-tight">
                  বাজার দর
                </h4>
                <BanglaDate className="font-bangla font-normal text-[10px] sm:text-[12px] truncate" />
              </div>
            </div>
          </div>

          <div className="flex-none">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex cursor-pointer items-center gap-x-2 sm:gap-x-3"
                >
                  <img
                    alt={user.name}
                    src={
                      user.image ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-cover"
                  />
                  <span className="hidden sm:inline text-base font-medium text-gray-800">
                    {user.name?.split(" ")[0]}
                  </span>
                  <span className="hidden sm:inline text-[10px] text-gray-500">▼</span>
                </div>

                {/* Dropdown card */}
                <div
                  tabIndex={0}
                  className="dropdown-content z-50 mt-3 sm:mt-4 w-[280px] sm:w-[390px] max-w-[90vw] rounded-2xl border border-gray-200 bg-white px-5 pb-8 pt-5 shadow-xl sm:px-6 sm:pb-16 sm:pt-6"
                >
                  <h3 className="truncate text-base sm:text-lg font-semibold text-gray-900">
                    {user.name}
                  </h3>
                  <p className="mb-5 truncate text-xs sm:mb-6 sm:text-sm text-gray-500">
                    {user.email}
                  </p>

                  <Link
                    href="/profile"
                    className="font-bangla mb-4 flex items-center gap-x-2 text-sm sm:mb-5 sm:text-base text-gray-900 hover:text-green-700"
                  >
                    <span>👤</span> আমার প্রোফাইল
                  </Link>

                  <button
                    onClick={handleOut}
                    className="font-bangla flex cursor-pointer items-center gap-x-2 text-sm sm:text-base text-red-500 hover:text-red-600"
                  >
                    <span>↩</span> সাইন আউট
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-3 sm:gap-x-6">
                <Link
                  href="/signin"
                  className="font-bangla font-semibold text-black text-[12px] sm:text-[14px]"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/signup"
                  className="bg-[#05893E] py-2 px-3 sm:py-2.5 sm:px-5 rounded-[8px] sm:rounded-[10px] font-bangla font-semibold text-white text-[12px] sm:text-[14px]"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar