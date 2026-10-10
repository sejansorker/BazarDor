// import React from 'react'
// import Container from './Container'

// const Up = async() => {
//     const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
//     const data = await res.json()
//      const newData = data.filter( (item) => item.change.dir === "up" )
//     // console.log(newData);
    
//   return (
//     <div className='pb-10 bg-[#E1E8E1] pt-10'>
//         <Container>
//             <div className="">
//                 <h3 className='pb-10 text-[20px] text-black font-bangla font-bold'> <span className= 'text-red-500'>▲</span> আজ দাম বেড়েছে</h3>
//                 <div className="flex flex-wrap justify-between gap-y-6">
//                     {newData.map((item)=>(

//                     <div key={item.id} className="w-[32%] ">
//                             <div className="p-4 bg-[#FAFCFA] rounded-[12px]">
//                                 <div className="flex gap-x-2 items-center pb-3">
//                                     <div className="h-12 rounded-[10px] w-12 flex items-center justify-center bg-[#F0F5F0]">
//                                        <span>{item.image}</span>
//                                     </div>
//                                     <div className="">
//                                         <h6>{item.nameBn}</h6>
//                                         <p>প্রতি  <span>
//     {item.unit === "kg" ? "কেজি" : item.unit === "litre" ? "লিটার" : item.unit === "dozen" ? "ডজন" : item.unit === "piece" ? "পিস" : "" }
//   </span> </p>
//                                     </div>
//                                 </div>
//                                 <div className="">
//                                     <p>আজকের দাম</p>
//                                     <div className="flex items-center justify-between">
//                                         <p>{item.today.toLocaleString("bn-BD")} টাকা</p>
//                                         <button className='py-1 px-2.5 bg-[#F0F5F0] rounded-3xl'> <span className={` ${item.change.dir === "up" ? "text-red-500" : ""}`} >▲</span> {item.change.pct.toLocaleString("bn-BD")}%</button>
//                                     </div>
//                                 </div>
//                             </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default Up


import Container from './Container'
import ProductCard from './ProductCard'

const Up = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
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

