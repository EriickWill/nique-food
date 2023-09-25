import LogoTop from '@/components/LogoTop'
import React from 'react'
import "./home.scss"
import Image from 'next/image'
import NavBar from '@/components/NavBar'
export default function Home() {
  return (
    <>
      <LogoTop />
      <main>
        <Image src="/bg-home.png" width={1680} height={1000} alt='background home'/>
          <section>
            <span>The pure taste of</span>
            <h1>Thailand</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam itaque excepturi quae magni</p>
          </section>
          <NavBar/>
      </main>
      
    </>
  )
}
