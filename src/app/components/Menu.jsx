// import React from 'react'

// import Container from './Container';
// import Link from 'next/link';

// const Menu = async () => {
//     const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
//   const data = await res.json()
//   //  console.log(data);
   
  
//   return (
//     <div className="bg-[#F3FBF4] border-t-2 border-b-2 border-[#F0F5F0] py-4">

//     <Container>
//     <div>
//         <div className="flex items-center gap-x-6  pl-4">
//         {data.map((item,index)=>(
//             <div key={index} className="flex gap-x-2 items-center">
//                      <i className=' '>{item.icon}</i>
//                      <Link className='font-bangla font-semibold text-[12px]  text-[#1D271F]' href={`/category/${item.slug}`}>
                     
//                  {item.nameBn}
//                      </Link>
                     
                
//             </div>
//         ))}
        
//         </div>
//     </div>
//     </Container>
//     </div>
//   )
// }
// export default Menu

"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

const Menu = () => {
  const pathname = usePathname()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
        const data = await res.json()
        setCategories(Array.isArray(data) ? data : [])
      } catch (err) {
        setCategories([])
      } finally {
        setLoading(false)
      }
    }
    getCategories()
  }, [])

  return (
    <div className="bg-[#F3FBF4] border-t-2 border-b-2 border-[#F0F5F0] py-3 sm:py-4">
      <Container>
        <nav className="flex items-center gap-x-2 overflow-x-auto px-1 sm:gap-x-3 sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-x-2 px-3 py-1.5">
                  <div className="skeleton h-4 w-4 rounded-full"></div>
                  <div className="skeleton h-3 w-14 rounded"></div>
                </div>
              ))
            : categories.map((item) => {
                const href = `/category/${item.slug}`
                const isActive = pathname === href

                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={`flex shrink-0 items-center gap-x-1.5 rounded-full px-3 py-1.5 font-bangla text-[12px] font-semibold whitespace-nowrap transition sm:text-[13px] ${
                      isActive
                        ? "bg-[#05893E] text-white"
                        : "text-[#1D271F] hover:bg-[#E1E8E1]"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.nameBn}</span>
                  </Link>
                )
              })}
        </nav>
      </Container>
    </div>
  )
}

export default Menu