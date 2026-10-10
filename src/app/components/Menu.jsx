import React from 'react'
import Container from './Container';
import Link from 'next/link';

const Menu = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
  const data = await res.json()
  //  console.log(data);
   
  
  return (
    <div className="bg-[#F3FBF4] border-t-2 border-b-2 border-[#F0F5F0] py-4">

    <Container>
    <div>
        <div className="flex items-center gap-x-6  pl-4">
        {data.map((item,index)=>(
            <div key={index} className="flex gap-x-2 items-center">
                     <i className=' '>{item.icon}</i>
                     <Link className='font-bangla font-semibold text-[12px]  text-[#1D271F]' href={`item.slug`}>
                     
                 {item.nameBn}
                     </Link>
                     
                
            </div>
        ))}
        
        </div>
    </div>
    </Container>
    </div>
  )
}
export default Menu