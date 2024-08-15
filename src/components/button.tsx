import React from 'react'

interface ButtonProps {
  href: string
  label: string
  className?: string // Optional className prop
}

export default function Button({ href, label, className }: ButtonProps) {
  return (
    <div
      className={`flex justify-center align-middle mb-20 ${className || ''}`}
    >
      <div className="px-6 uppercase py-6 gap-2 text-black text-lg bg-[#9FBE77] rounded-full flex justify-center align-middle items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"></path>
        </svg>
        <a href={href}>{label}</a>
      </div>
    </div>
  )
}
