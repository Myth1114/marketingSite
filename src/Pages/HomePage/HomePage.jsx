import React from 'react'
import InfoSection from '../../Components/InfoSection/InfoSection'
import Pricing from '../../Components/Pricing/Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function HomePage() {
  console.log(homeObjOne)
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default HomePage
