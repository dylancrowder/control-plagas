"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-up":
        return "animate-fade-up"
      case "fade-in":
        return "animate-fade-in"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "slide-in-left":
        return "animate-slide-in-left"
      case "zoom-in":
        return "animate-zoom-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()} transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

