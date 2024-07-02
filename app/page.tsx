import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-black p-3 overflow-hidden dark:bg-grid-white/[0.05] bg-grid-black/[0.3] flex'>
        <div className="max-w-7xl mx-auto">
          <Navbar/>
          <HeroSection />
          <Skills />
          <Featured />
          <Footer />
        </div>
    </div>
  )
}

export default page