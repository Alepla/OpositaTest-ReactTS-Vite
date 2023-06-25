import { useEffect, useRef, useState } from "react"

export interface UseCounterReturnType {
  getPostTitle: () => string
  getPostTooltip: () => string
  ref: React.RefObject<HTMLHeadingElement>
}

export const useOverflow = (title: string): UseCounterReturnType => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const hasOverflow = current.offsetHeight > 60
      setIsOverflowed(hasOverflow)
    }
  }, [title])

  const getPostTitle = (): string => {
    if (isOverflowed) return title.substring(0, 25) + "..."
    return title
  }

  const getPostTooltip = (): string => {
    const emptyTooltip: string = ""
    if (isOverflowed) return title
    return emptyTooltip
  }

  return {
    getPostTitle,
    getPostTooltip,
    ref,
  }
}
