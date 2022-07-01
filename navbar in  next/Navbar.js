import React from 'react'
import Link from "next/link";
import "../../styles/navbar.module.css";

export const Navbar = () => {
  return (
<>
<nav>
      <ul className='navbar'>
     <li>
<Link href="/">
  <a >Home</a>
  </Link>
  <Link href="/about">
  <a >about </a>
  </Link>
  <Link href="/contact">
  <a >contact</a>
  </Link>
  <Link href="/blog">
  <a >Blog</a></Link>

  <Link href="/product">
  <a>Product</a></Link></li>
      </ul>
     </nav>
</>
  )
}
