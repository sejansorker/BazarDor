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
    <div className="bg-[#E1E8E1] py-6 sm:py-10">
      <Container>
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-[#fafcf9] px-5 py-6 sm:px-8 md:flex-row md:justify-between md:gap-8 md:py-8">
          <div className="w-full text-center md:w-2/3 md:text-left">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 font-bangla text-xs font-semibold text-green-800 sm:px-5 sm:py-2">
              {today}
            </span>

            <h1 className="mt-3 font-bangla text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-4 font-bangla text-sm leading-6 text-gray-600 sm:mt-5 sm:leading-7 md:pr-8 lg:pr-24 sm:text-[15px]">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
              গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link
              href="#All"
              className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-2.5 font-bangla text-sm font-semibold text-white shadow-md shadow-green-900/30 transition hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:mt-6"
            >
              সব পণ্য দেখুন
            </Link>
          </div>

      
          <div className="flex w-full justify-center md:w-1/3 md:justify-end">
            <Image
              src="/banner.png"
              height={300}
              width={250}
              alt="banner"
              priority
              className="h-auto w-[160px] sm:w-[200px] md:w-[220px] lg:w-[250px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
