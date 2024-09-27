
import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div> 
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/address">Address</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Header