

"use client"

import { useState } from "react"
import ProductCard from "@/app/components/ProductCard"

const CategoryProducts = ({ products, isLoading = false }) => {
  const [sortOrder, setSortOrder] = useState("default")

  if (isLoading || !products) {
    return (
      <>
        <div className="bg-[#FAFCFA] flex justify-end items-center gap-3 p-4.5 rounded-[20px]">
          <div className="skeleton h-5 w-14 rounded"></div>
          <div className="skeleton h-10 w-44 rounded-lg"></div>
        </div>

        <div className="skeleton mt-10 h-4 w-52 rounded"></div>

        <div className="flex flex-wrap justify-between gap-y-6 mt-6 pb-28">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="skeleton h-44 w-full rounded-2xl sm:w-[48%] lg:w-[23%]"
            ></div>
          ))}
        </div>
      </>
    )
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "lowToHigh") return Number(a.today) - Number(b.today)
    if (sortOrder === "highToLow") return Number(b.today) - Number(a.today)
    return 0
  })

  return (
    <>
      <div className="bg-[#FAFCFA] flex justify-end items-center gap-3 p-4.5 rounded-[20px]">
        <label htmlFor="sort" className="font-bangla">
          সাজান
        </label>

        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 bg-white font-bangla outline-none"
        >
          <option value="default">ডিফল্ট</option>
          <option value="lowToHigh">দাম: কম থেকে বেশি</option>
          <option value="highToLow">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="mt-10 font-bangla">মোট {products.length} টি পণ্য দেখানো হচ্ছে</p>

      <div className="flex flex-wrap justify-between gap-y-6 mt-6 pb-28">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default CategoryProducts