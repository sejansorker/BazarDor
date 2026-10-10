// import React from 'react'

// const page = async({params}) => {
//    const {id} = await params
//    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${id}`)
//    const data = await res.json()
//    console.log(data);
   
//   return (
//     <div>page</div>
//   )
// }

// export default page


import React from "react"
import Container from "@/app/components/Container"

const Page = async ({ params }) => {
  const { id } = await params

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`
  )

  if (!res.ok) {
    throw new Error("Product data fetch failed")
  }

  const data = await res.json()

  const markets = data.markets || []

  const formatPrice = (price) =>
    Number(price).toLocaleString("bn-BD")

  const unitName = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  }

  const allMinPrices = markets.map((market) => market.min)
  const allMaxPrices = markets.map((market) => market.max)

  const lowestPrice = allMinPrices.length
    ? Math.min(...allMinPrices)
    : 0

  const highestPrice = allMaxPrices.length
    ? Math.max(...allMaxPrices)
    : 0

  const averagePrice = markets.length
    ? Math.round(
        markets.reduce(
          (total, market) =>
            total + (market.min + market.max) / 2,
          0
        ) / markets.length
      )
    : 0

  const changeColor =
    data.change?.dir === "up"
      ? "text-red-500"
      : data.change?.dir === "down"
      ? "text-green-600"
      : "text-gray-500"

  return (
    <div className="min-h-screen bg-[#EEF4EF] py-8">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 font-bangla text-sm text-gray-500">
          <span>হোম</span>
          <span>/</span>
          <span>{data.categoryNameBn}</span>
          <span>/</span>
          <span className="text-[#1D271F]">
            {data.nameBn}
          </span>
        </div>

        {/* Product Header */}
        <div className="mb-5 flex flex-col justify-between gap-5 rounded-[20px] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4EF] text-4xl">
              {data.image || data.categoryIcon || "🛒"}
            </div>

            <div>
              <p className="mb-1 font-bangla text-xl font-bold text-[#1D271F] sm:text-2xl">
                {data.nameBn}
              </p>

              <p className="font-bangla text-sm text-gray-500">
                {data.categoryNameBn} · প্রতি{" "}
                {unitName[data.unit] || data.unit}
              </p>

              <p className="mt-2 font-bangla text-xs text-gray-500">
                বাংলাদেশের বিভিন্ন বাজারের আজকের দাম
              </p>
            </div>
          </div>

          {/* Today's Price */}
          <div className="min-w-[130px] rounded-2xl bg-[#EEF4EF] px-5 py-4 text-center">
            <p className="font-bangla text-xs text-gray-500">
              আজকের বাজারদর
            </p>

            <p className="mt-1 font-bangla text-3xl font-bold text-[#167B43]">
              {formatPrice(data.today)}
            </p>

            <p className="font-bangla text-xs text-gray-500">
              টাকা / {unitName[data.unit] || data.unit}
            </p>

            <p
              className={`mt-2 font-bangla text-xs font-semibold ${changeColor}`}
            >
              {data.change?.dir === "up"
                ? "▲"
                : data.change?.dir === "down"
                ? "▼"
                : "●"}{" "}
              {formatPrice(data.change?.pct || 0)}%
            </p>
          </div>
        </div>

        {/* Main Details Card */}
        <div className="rounded-[20px] bg-[#FAFCFA] p-5 sm:p-7">
          <h2 className="mb-4 font-bangla text-lg font-bold text-[#1D271F]">
            দামের সারসংক্ষেপ
          </h2>

          {/* Summary Cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#E1E8E1] p-4">
              <p className="font-bangla text-sm text-gray-500">
                সর্বনিম্ন দাম
              </p>

              <p className="mt-2 font-bangla text-2xl font-bold text-green-600">
                {formatPrice(lowestPrice)} টাকা
              </p>

              <p className="mt-1 font-bangla text-xs text-gray-500">
                বাজারগুলোর মধ্যে সবচেয়ে কম
              </p>
            </div>

            <div className="rounded-xl border border-[#E1E8E1] p-4">
              <p className="font-bangla text-sm text-gray-500">
                সর্বোচ্চ দাম
              </p>

              <p className="mt-2 font-bangla text-2xl font-bold text-red-500">
                {formatPrice(highestPrice)} টাকা
              </p>

              <p className="mt-1 font-bangla text-xs text-gray-500">
                বাজারগুলোর মধ্যে সবচেয়ে বেশি
              </p>
            </div>

            <div className="rounded-xl border border-[#E1E8E1] p-4">
              <p className="font-bangla text-sm text-gray-500">
                গড় দাম
              </p>

              <p className="mt-2 font-bangla text-2xl font-bold text-[#167B43]">
                {formatPrice(averagePrice)} টাকা
              </p>

              <p className="mt-1 font-bangla text-xs text-gray-500">
                বাজারগুলোর গড় দামের হিসাব
              </p>
            </div>
          </div>

          {/* Market Price Table */}
          <h2 className="mb-4 font-bangla text-lg font-bold text-[#1D271F]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-xl border border-[#E1E8E1]">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead className="bg-[#F2F6F2]">
                <tr className="font-bangla text-sm text-gray-600">
                  <th className="px-4 py-4 font-medium">
                    বাজার
                  </th>

                  <th className="px-4 py-4 font-medium">
                    বিভাগ
                  </th>

                  <th className="px-4 py-4 text-right font-medium">
                    সর্বনিম্ন
                  </th>

                  <th className="px-4 py-4 text-right font-medium">
                    সর্বোচ্চ
                  </th>

                  <th className="px-4 py-4 text-right font-medium">
                    গড় দাম
                  </th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const marketAverage = Math.round(
                    (market.min + market.max) / 2
                  )

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-[#E1E8E1] transition-colors hover:bg-[#F2F6F2]"
                    >
                      <td className="px-4 py-4 font-bangla text-sm font-medium text-[#1D271F]">
                        {market.market}
                      </td>

                      <td className="px-4 py-4 font-bangla text-sm text-gray-600">
                        {market.division}
                      </td>

                      <td className="px-4 py-4 text-right font-bangla text-sm text-[#1D271F]">
                        {formatPrice(market.min)} টাকা
                      </td>

                      <td className="px-4 py-4 text-right font-bangla text-sm text-[#1D271F]">
                        {formatPrice(market.max)} টাকা
                      </td>

                      <td className="px-4 py-4 text-right font-bangla text-sm font-semibold text-[#167B43]">
                        {formatPrice(marketAverage)} টাকা
                      </td>
                    </tr>
                  )
                })}

                {markets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center font-bangla text-sm text-gray-500"
                    >
                      এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="py-6 text-center">
          <p className="font-bangla text-xs text-gray-500">
            বাজার দর — বাংলাদেশের বিভিন্ন বাজারের দামের তথ্য।
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Page

