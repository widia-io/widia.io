'use client'

import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal'
const REVEAL_RESET_DELAY_MS = 850

function revealElement(element: Element) {
  if (element.classList.contains('in')) return

  element.classList.add('in')

  window.setTimeout(() => {
    const node = element as HTMLElement
    node.style.transition = 'none'
    node.style.opacity = '1'
    node.style.transform = 'none'
    node.classList.remove('reveal--pending')
  }, REVEAL_RESET_DELAY_MS)
}

function getRevealElements(root: ParentNode = document) {
  return Array.from(root.querySelectorAll(REVEAL_SELECTOR))
}

function getHashTarget() {
  try {
    return document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
  } catch {
    return null
  }
}

function revealHashSection() {
  const target = getHashTarget()
  if (!target) return

  if (target.matches(REVEAL_SELECTOR)) revealElement(target)
  getRevealElements(target).forEach(revealElement)
}

function revealVisible(elements: Element[]) {
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight * 0.94 && rect.bottom > 0
    if (isVisible) revealElement(element)
  })
}

function prepareRevealElements(elements: Element[]) {
  elements.forEach((element) => element.classList.add('reveal--pending'))
}

export default function RevealRuntime() {
  useEffect(() => {
    const elements = getRevealElements()
    prepareRevealElements(elements)

    const syncReveal = () => {
      revealVisible(elements)
      revealHashSection()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          revealElement(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((element) => observer.observe(element))
    syncReveal()
    requestAnimationFrame(syncReveal)
    window.setTimeout(syncReveal, 120)
    window.setTimeout(syncReveal, 420)

    window.addEventListener('load', syncReveal)
    window.addEventListener('scroll', syncReveal, { passive: true })
    window.addEventListener('hashchange', syncReveal)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', syncReveal)
      window.removeEventListener('scroll', syncReveal)
      window.removeEventListener('hashchange', syncReveal)
    }
  }, [])

  return null
}
