
import Container from './Container'
import ProductCard from './ProductCard'

const Down = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  )

  const data = await res.json()

  const getChange = (item) => Math.abs(Number(item.change?.amount) || 0)

  const newData = data
    .filter((item) => item.change?.dir === "down")
    .sort((a, b) => getChange(b) - getChange(a)) 
    .slice(0, 6) 

  return (
    <div className="pb-10 bg-[#E1E8E1]">
      <Container>
        <h3 className="pb-10 text-[20px] text-black font-bangla font-bold">
          <span className="text-green-500">▼</span> আজ দাম কমেছে
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

export default Down
