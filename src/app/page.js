"use client"

import NavbarHeader from './components/NavbarComponents'
import Banner from './components/Banner'
import Blogs from './components/Blogs'
import { useState } from 'react'
import Footer from './components/Footer'

export default function Home() {
  const [height,setHeight]=useState(0)
  return (
  <>
  
  <NavbarHeader setHeight={setHeight}/>
  <Banner height={height}/>
  <Blogs/>
  
  <Footer/>
  </>
  )
}
