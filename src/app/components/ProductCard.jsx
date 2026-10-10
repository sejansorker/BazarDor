
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ item }) => {
  
  
  const unitName = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  }
  return (
    <div className="w-[32%]">
    <Link href={`/details/${item.id}`}>
      <div className="p-4 bg-[#FAFCFA] rounded-[12px]">
        <div className="flex gap-x-2 items-center pb-3">
          <div className="h-12 rounded-[10px] w-12 flex items-center justify-center bg-[#F0F5F0]">
            <span>{item.image}</span>
          </div>

          <div>
            <h6>{item.nameBn}</h6>
            <p>প্রতি {unitName[item.unit] || item.unit}</p>
          </div>
        </div>

        <div>
          <p>আজকের দাম</p>

          <div className="flex items-center justify-between">
            <p>
              {item.today.toLocaleString("bn-BD")} টাকা
            </p>

            <button className="py-1 px-2.5 bg-[#F0F5F0] rounded-3xl">
              {item.change?.dir === "up" ? (
                <span className="text-red-500">▲</span>
              ) : item.change?.dir === "down" ? (
                <span className="text-green-500">▼</span>
              ) : (
                <span>—</span>
              )}

              {" "}
              {item.change?.pct?.toLocaleString("bn-BD") ?? 0}%
            </button>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default ProductCard

