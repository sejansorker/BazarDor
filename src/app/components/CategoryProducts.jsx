"use client"

import { useState } from "react"
import ProductCard from "@/app/components/ProductCard"

const CategoryProducts = ({ products }) => {
  const [sortOrder, setSortOrder] = useState("default")

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.today - b.today
    }

    if (sortOrder === "highToLow") {
      return b.today - a.today
    }

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
        <p className="mt-10">মোট {products.length} টি পণ্য দেখানো হচ্ছে</p>
      <div className="flex flex-wrap justify-between gap-y-6 mt-6 pb-28">
        
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default CategoryProducts
