import Link from "next/link"
import Container from "@/app/components/Container"

export default function NotFound() {
  return (
    <div className="bg-[#E1E8E1] py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-6xl">🛒</p>
          <h1 className="mt-4 font-bangla text-3xl font-bold text-gray-900 sm:text-4xl">
            ৪০৪ - পেজটি পাওয়া যায়নি
          </h1>
          <p className="mt-2 font-bangla text-sm text-gray-600 sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরানো হয়েছে।
          </p>
          <Link
            href="/"
            className="mt-6 rounded-lg bg-green-700 px-5 py-2.5 font-bangla text-sm font-semibold text-white hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </Container>
    </div>
  )
}