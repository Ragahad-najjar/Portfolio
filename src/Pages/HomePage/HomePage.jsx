import React from 'react'
import Hero from '../../components/Hero/Hero'
import SecAboutMe from '../../components/SecAboutMe/SecAboutMe'
import SecEducation from '../../components/SecEducation/Education'
import ContactMe from '../../components/ContactMe/ContactMe'
import SecContact from '../../components/SecContact/SecContact'
import SecPortfolio from '../../components/SecPortfolio/SecPortfolio'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <SecAboutMe/>
    <SecEducation/>
    <SecContact/>
    <SecPortfolio/>
    <ContactMe/>
    </>
  )
}

export default HomePage