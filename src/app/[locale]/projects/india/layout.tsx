import { ReactNode } from 'react'

export default function IndiaLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <>
      <div className="relative">{children}</div>
      {modal}
    </>
  )
}
