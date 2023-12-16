'use client'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'

const Modal = ({ children }) => {
  const overlay = useRef()
  const wrapper = useRef()

  const router = useRouter()

  // voltar ou fechar modal
  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    // overlay
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60">
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6">
        {children}
      </div>
    </div>
  )
}

export default Modal
