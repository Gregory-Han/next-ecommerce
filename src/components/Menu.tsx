"use client"

import Image from "next/image"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)

  return (
    <div>
        <Image src="/menu.png" alt="menu" width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
    </div>
  )
}

export default Menu