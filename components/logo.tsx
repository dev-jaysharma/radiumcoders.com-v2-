import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <Image src="/logo.png" alt="Logo" width={40} height={40} />
  )
}

export default Logo