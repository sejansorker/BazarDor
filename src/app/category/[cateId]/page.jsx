import Container from "@/app/components/Container"
import CategoryProducts from "@/app/components/CategoryProducts"

const Category = async ({ params }) => {
  const { cateId } = await params

  const categoryRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${cateId}`
  )
  
  const categoryData = await categoryRes.json()

  const productRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${cateId}`
  )
  
  const productData = await productRes.json()
  return (
    <div className="bg-[#E1E8E1]">
      <Container>
        <div className="py-6">
          <div className="flex items-center rounded-[20px] p-5.5 bg-[#FAFCFA] w-full">
            <span>{categoryData.icon}</span>
            <div className="pl-3">
              <p className="font-bangla font-bold text-[24px]">
                {categoryData.nameBn}
              </p>
              <p className="text-[#1D271F] font-bangla font-normal text-[14px]">
                {productData.length} টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>
        <CategoryProducts products={productData} />
      </Container>
    </div>
  )
}

export default Category


