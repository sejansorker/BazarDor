import React from 'react'
import Container from './Container'
import ProductCard from './ProductCard'

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )

  const data = await res.json()

  return (
    <div id="All" className="pb-10 bg-[#E1E8E1]">
      <Container>
        <h3 className="pb-10 text-[20px] text-black font-bangla font-bold">
          সব পণ্য
        </h3>

        <div className="flex flex-wrap justify-between gap-y-6">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllProducts

