"use client"

import React from 'react'
import Services from '../components/Services'
import { Footer } from '../components/Footer'
import Home from '../components/Landing'
import Proejects from '../components/Projects'
import SliderImages from '../components/SlidingImages'

import Header from '../components/Header' 

const Page = () => {
  return (
    <>
      <Header theme="light" /> 
      <Home />
<Services/>
      {/* <Proejects />
      <SliderImages /> */}
     
    </>
  )
}

export default Page
