import { useEffect } from 'react'

type UseKeypressCallback = () => void

const useKeypress = (targetKey: string, callback: UseKeypressCallback) => {
  useEffect(() => {
    const handleKeypress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callback()
      }
    }

    window.addEventListener('keydown', handleKeypress)
    return () => {
      window.removeEventListener('keydown', handleKeypress)
    }
  }, [targetKey, callback])
}

export default useKeypress
