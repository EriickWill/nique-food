import React from 'react'
import "./style.scss"
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClockCircle } from "react-icons/ai";
export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li ><AiOutlineClockCircle className='icon'/></li>
          <li><Link href={""}>Menu</Link></li>
          <li><Link href={""}>Restaurant</Link></li>
          <li><Link href={""}>Classes</Link></li>
          <li className='book'><Link href={""}>Book a Table</Link></li>
        </ul>
      </nav>
    </>
  )
}
