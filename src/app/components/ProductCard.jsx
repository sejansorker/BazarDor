
import Link from 'next/link'
import React from 'react'

const unitName = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
}

const ProductCard = ({ item }) => {
  const dir = item.change?.dir

  const badgeColor =
    dir === "up" ? "text-green-600" : dir === "down" ? "text-red-500" : "text-gray-500"

  return (
    <div className="w-full sm:w-[48.5%] lg:w-[32%]">
      <Link href={`/details/${item.id}`} className="block">
        <div className="rounded-[12px] bg-[#FAFCFA] p-3 transition hover:shadow-md sm:p-4">
          <div className="flex items-center gap-x-2 pb-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#F0F5F0] text-xl sm:h-12 sm:w-12 sm:text-2xl">
              <span>{item.image}</span>
            </div>

            <div className="min-w-0">
              <h6 className="truncate font-bangla text-sm font-semibold text-gray-900 sm:text-base">
                {item.nameBn}
              </h6>
              <p className="font-bangla text-xs text-gray-500 sm:text-sm">
                প্রতি {unitName[item.unit] || item.unit}
              </p>
            </div>
          </div>

          <div>
            <p className="font-bangla text-xs text-gray-500 sm:text-sm">আজকের দাম</p>

            <div className="flex items-center justify-between gap-2">
              <p className="font-bangla text-base font-bold text-gray-900 sm:text-lg">
                {Number(item.today).toLocaleString("bn-BD")} টাকা
              </p>

              <span
                className={`shrink-0 whitespace-nowrap rounded-3xl bg-[#F0F5F0] px-2 py-1 font-bangla text-xs font-medium sm:px-2.5 sm:text-sm ${badgeColor}`}
              >
                {dir === "up" ? "▲" : dir === "down" ? "▼" : "—"}{" "}
                {Number(item.change?.pct ?? 0).toLocaleString("bn-BD")}%
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
