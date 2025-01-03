'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to your error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-deep-gray">Something went wrong!</h2>
        <button
          className="mt-4 rounded bg-brand-teal px-4 py-2 text-white"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}