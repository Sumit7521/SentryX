import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4'>
        <div>
            <h1 className='text-2xl'>SyntryX</h1>
        </div>
        <div className='text-black flex gap-10'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar