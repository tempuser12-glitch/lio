import { useState } from "react"

type toggleProps = {
    checked:boolean,
    onChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Toggle = ({checked=false,onChange}:toggleProps) => {
    
  return (
    <label htmlFor="toggle" className="relative cursor-pointer inline-flex w-[40px] p-0.5 bg-white rounded-2xl peer-checked:bg-green-500">
        <input className="absolute w-full peer sr-only" onChange={onChange} type="checkbox" name="toggle" id="toggle" />
        <span className="h-[16px] w-[16px] bg-black rounded-full transition-transform peer-checked:translate-x-[20px]"></span>
    </label>
  )
}

export default Toggle;
