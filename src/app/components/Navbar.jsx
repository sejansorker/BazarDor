"use client"
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
          router.push("/")
          router.refresh()
        },
      },
    })
  }

  return (
    <div className="bg-[#F3FBF4] py-[14px]">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <div className="flex">
              <Link href="/">
                <div className="bg-[#05893E] h-10 w-10 rounded-[5px] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    height={28}
                    width={18}
                    alt="logo"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </Link>
              <div className="pl-2">
                <h4 className="font-bangla font-bold text-[20px]">বাজার দর</h4>
                <BanglaDate className="font-bangla font-normal text-[12px]" />
              </div>
            </div>
          </div>

          <div className="flex-none">
            {user ? (
              <div className="dropdown dropdown-end">
                {/* Trigger: avatar + name + arrow */}
                <div
                  tabIndex={0}
                  role="button"
                  className="flex cursor-pointer items-center gap-x-3"
                >
                  <img
                    alt={user.name}
                    src={
                      user.image ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    className="h-10 w-10 rounded-xl object-cover"
                  />
                  <span className="text-base font-medium text-gray-800">
                    {user.name?.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-gray-500">▼</span>
                </div>

                {/* Dropdown card */}
                <div
                  tabIndex={0}
                  className="dropdown-content z-50 mt-4 w-[390px] max-w-[90vw] rounded-2xl border border-gray-200 bg-white px-6 pb-16 pt-6 shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <p className="mb-6 text-sm text-gray-500">{user.email}</p>

                  <Link
                    href="/profile"
                    className="font-bangla mb-5 flex items-center gap-x-2 text-base text-gray-900 hover:text-green-700"
                  >
                    <span>👤</span> আমার প্রোফাইল
                  </Link>

                  <button
                    onClick={handleOut}
                    className="font-bangla flex cursor-pointer items-center gap-x-2 text-base text-red-500 hover:text-red-600"
                  >
                    <span>↩</span> সাইন আউট
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-x-6 items-center">
                <Link href="/signin">
                  <button className="cursor-pointer font-bangla font-semibold text-black text-[14px]">
                    সাইন ইন
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="bg-[#05893E] py-2.5 px-5 rounded-[10px] cursor-pointer font-bangla font-semibold text-white text-[14px]">
                    সাইন আপ
                  </button>
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