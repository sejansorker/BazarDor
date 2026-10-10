import Link from "next/link";
import Container from './Container';
import Image from "next/image";


export default function BazarBanner() {
  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <div className="py-10 bg-[#E1E8E1]">

    <Container className=" py-6">
      <div className="relative flex items-center justify-between gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-[#fafcf9] px-6 py-6 sm:px-8 md:py-8">
 
        <div className="w-2/3">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-xs font-semibold text-green-800">
            {today}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-[15px] pr-35">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
            গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-900/30 transition hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
        <div className="w-1/3">
            <Image src="/banner.png" height={300} width={250} alt="banner" />
        </div>
        
      </div>
    </Container>
    </div>
  );
}