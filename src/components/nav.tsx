'use client'
import React, { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-transparent uppercase z-10 top-0 w-full lg:hidden flex justify-between items-center lg:py-4 p-10 lg:p-0 lg:px-8 fixed text-white">
      {!isOpen && (
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-30 flex justify-start">
          <div className="relative w-3/4 h-full">
            {/* Blur layer */}
            <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm rounded-r-[35px]"></div>

            {/* Content */}
            <div className="relative p-8 text-white w-full rounded-r-[35px] h-full uppercase flex flex-col items-center">
              <div
                id="navheader"
                className="flex justify-between pb-8 w-full items-center"
              >
                <a href="/about" onClick={toggleMenu}>
                  LOGO
                </a>
                <button className="mb-4" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-4 text-3xl w-full">
                <a
                  href="/"
                  className="border-b border-white"
                  onClick={toggleMenu}
                >
                  home
                </a>
                <a
                  href="/about"
                  className="border-b border-white"
                  onClick={toggleMenu}
                >
                  about
                </a>
                <a
                  href="/portfolio"
                  className="border-b border-white"
                  onClick={toggleMenu}
                >
                  portfolio
                </a>
              </nav>
              <div
                id="navfooter"
                className="gap-12 justify-center fixed bottom-8 flex"
              >
                <a href="#" id="Instagram">
                  <span className="sr-only">instagram link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
                <a href="#" id="LinkedIn">
                  <span className="sr-only">linkedin link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </a>
                <a href="#" id="email">
                  <span className="sr-only">email link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
