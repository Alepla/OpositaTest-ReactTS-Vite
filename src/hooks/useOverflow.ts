import { useEffect, useRef, useState } from "react"
import { DOTS } from "../shared/pagination"

export interface UseCounterReturnType {
  getClippedTitle: () => string
  getOverflowTooltip: () => string
  ref: React.RefObject<HTMLHeadingElement>
}

const MAX_ALLOWED_HEIGHT: number = 60
const FIRST_LETTER_INDEX: number = 0
const LAST_LETTER_INDEX: number = 25

export const useOverflow = (title: string): UseCounterReturnType => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const hasOverflow = current.offsetHeight > MAX_ALLOWED_HEIGHT
      setIsOverflowed(hasOverflow)
    }
  }, [title])

  const getClippedTitle = (): string => {
    if (isOverflowed) return title.substring(FIRST_LETTER_INDEX, LAST_LETTER_INDEX) + DOTS
    return title
  }

  const getOverflowTooltip = (): string => {
    let emptyTooltip: string = ""
    if (isOverflowed) emptyTooltip = title
    return emptyTooltip
  }

  return {
    getClippedTitle,
    getOverflowTooltip,
    ref,
  }
}
