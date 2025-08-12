"use client"
import './App.css'
import React from 'react'
import Services from '../components/Services'
import { Footer } from '../components/Footer'
import Home from '../components/Landing'
import Proejects from '../components/Projects'
import SliderImages from '../components/SlidingImages'
import ResumeSection from '../components/ResumeSection'


const Page = () => {
  return (
    <>
     



    <Home />
<Services/>
      <Proejects />
      <SliderImages /> 
 <ResumeSection/>
     
    </>
  )
}

export default Page
