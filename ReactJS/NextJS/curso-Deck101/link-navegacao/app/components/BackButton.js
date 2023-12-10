'use client'
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      BackButton
    </button>
  )
}

export default BackButton
