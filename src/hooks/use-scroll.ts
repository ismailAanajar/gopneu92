"use client"

import { useState, useEffect, useCallback } from "react"

interface UseScrollOptions {
  threshold?: number
}

export function useScroll({ threshold = 10 }: UseScrollOptions = {}) {
  const [scrolled, setScrolled] = useState(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return scrolled
}
