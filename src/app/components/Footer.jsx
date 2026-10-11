import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <footer className="bg-[#FAFCFA] py-5 sm:py-6">
      <Container>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
          <p className="font-bangla text-xs text-gray-700 sm:text-sm">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
          <p className="font-bangla text-xs text-gray-500 sm:text-sm md:text-right">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer