"use client"
import React, { useEffect } from 'react'
import Home from '@/components/Home/Home'

const HomePage = () => {
    useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=''>
      <Home />
    </div>
  )
}

export default HomePage