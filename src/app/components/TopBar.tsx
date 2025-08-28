'use client'
import Toggle from "./Toggle"
import { useState } from "react"

const TopBar = () => {
    const [darkmode,setDarkmode] = useState(false);

  return (
    <div className='h-full flex justify-between items-center'>
        <ul className='w-full flex justify-evenly items-center gap-3 '>
            <li className='menu'>Home</li>
            <li className='menu'>Skills</li>
            <li className='menu'>Projects</li>
            <li className='menu'>Contact</li>
            <li><Toggle checked={darkmode} onChange={(e)=>setDarkmode(e.target.checked)} /></li>
        </ul>
    </div>
  )
}

export default TopBar
