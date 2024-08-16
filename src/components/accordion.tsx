'use client'

import React, { useState } from 'react'

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full max-w-md mx-auto text-black">
      <button
        onClick={toggleAccordion}
        className="w-full text-left bg-gray-100 px-4 py-2 rounded-md shadow-md focus:outline-none"
      >
        <span className="text-lg font-semibold">Accordion Title</span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 bg-gray-200">
          <p>
            This is the content of the accordion. It expands and collapses with
            a smooth animation.
          </p>
        </div>
      </div>
    </div>
  )
}
