"use client"

import React, { useState } from 'react'

const Page = () => {

  const [num, setnum] = useState(0)

  return (
    <div className=''>
      <h1 className=''>hey Next</h1>
      <h1 className=''>value of num is {num}</h1>
      <button className='' onClick={()=>setnum(num+10)}>increase</button>
    </div>
  )
}

export default Page