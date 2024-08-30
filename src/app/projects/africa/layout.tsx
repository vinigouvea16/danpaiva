import { ReactNode } from 'react'

export default function PantanalLayout({
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
