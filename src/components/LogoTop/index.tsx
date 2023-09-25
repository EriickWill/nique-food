import React from 'react'
import "./style.scss"
import Link from 'next/link'

export default function LogoTop() {
  return (
    <header>
      <div className='container'>
        <Link href={"/"}>nique.</Link>
      </div> 
    </header>
  )
}
