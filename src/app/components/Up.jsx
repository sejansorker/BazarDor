

import Container from './Container'
import ProductCard from './ProductCard'

const Up = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )

  const data = await res.json()

  const newData = data.filter(
    (item) => item.change?.dir === "up"
  )

  return (
    <div className="pb-10 bg-[#E1E8E1] pt-10">
      <Container>
        <h3 className="pb-10 text-[20px] text-black font-bangla font-bold">
          <span className="text-red-500">▲</span> আজ দাম বেড়েছে
        </h3>

        <div className="flex flex-wrap justify-between gap-y-6">
          {newData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Up

