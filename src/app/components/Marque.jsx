import Image from "next/image"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marque = async() => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
  const maData = await res.json()
  
  // console.log(maData);
  
  return (
   <div className="bg-[#E1E8E1]">

       <MarqueeText direction="left" duration={30}>
      <div className="flex bg-[#F0F5F0] ">
        {maData.slice(0, 6).map((item,index)=>(
          <div key={index} className="flex items-center px-4">
            <span className="text-2xl">{item.image}</span>
            <p className="py-2  border-2 border-[#F0F5F0]">{item.nameBn}</p>
            <div className="flex items-center gap-x-1">
              <p>{item.today.toLocaleString("bn-BD")}</p>
            <p>টাকা /</p>
            <p>কেজি</p>
            </div>
          {item.change.dir === "up" ? (
  <span className="text-red-500">▲</span>
) : item.change.dir === "down" ? (
  <span className="text-green-500">▼</span>
) : (
  <span>—</span>
)}
          <p>{item.change.pct.toLocaleString("bn-BD")}%</p>
          </div>
        ))}
      </div>
       </MarqueeText>
   </div>
  )
}

export default Marque