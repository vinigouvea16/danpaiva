'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavB() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="absolute top-[5px] left-1/2 hidden lg:flex transform -translate-x-1/2 z-10 group">
      <button
        onClick={toggleMenu}
        className={`bg-gray-200 opacity-60 hover:opacity-100 text-black px-5 py-5 hover:pb-1 rounded-3xl shadow-2xl transition-colors w-auto ${
          isOpen ? 'py-5 pb-1' : ''
        }`}
      >
        <div className="flex flex-col items-center ">
          <span>Nav</span>
          {!isOpen && (
            <span className="h-[4px] rounded-3xl mt-2 overflow-hidden w-12 text-white bg-stone-600 transition-all duration-300 ease-in transform group-hover:h-auto group-hover:mt-2 group-hover:w-12 group-hover:mb-0  group-hover:rounded-full group-hover:bg-stone-300 group-hover:px-1 text-xs">
              <span className="opacity-0 uppercase group-hover:opacity-100">
                Menu
              </span>
            </span>
          )}
        </div>

        {isOpen && (
          <div className="flex my-4 space-x-2 justify-center bg-stone-300 rounded-full">
            <Link
              href="/"
              className="block px-4 py-2 rounded-full hover:bg-stone-600 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 rounded-full hover:bg-stone-600 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block px-4 py-2 rounded-full hover:bg-stone-600 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
          </div>
        )}
      </button>
    </div>
  )
}
