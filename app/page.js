import Community from '@/components/Home/Community'
import Contributors from '@/components/Home/Contributors'
import Hero from '@/components/Home/Hero'
import Introduction from '@/components/Home/Introduction'
import PContribute from '@/components/Home/PContribute'
import Potential from '@/components/Home/Potential'
import Projects from '@/components/Home/Projects'
import Resources from '@/components/Home/Resources'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Potential />
      <Projects />
      <PContribute />
      <Contributors />
      <Resources />
      {/* <Introduction /> */}
      <Community />
    </main>
  )
}

export default Home