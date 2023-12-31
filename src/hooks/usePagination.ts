import { useMemo } from "react"
import { DOTS } from "../shared/pagination"
import { calculateRange } from "../helpers/calculateRange"

export interface UsePaginationReturnType {
  paginationRange: Array<string | number>
}

const MAX_NUMBER_OF_PAGES: number = 5
const FIRST_PAGE_INDEX: number = 1
const DEFAULT_PAGE_SIZE: number = 10
const NUM_PAGES_ADJACENT: number = 1
const MAX_ALLOWED_DISTANCE: number = 2

export const usePagination = (
  totalElements: number,
  currentPage: number,
  pageSize: number = DEFAULT_PAGE_SIZE
): UsePaginationReturnType => {
  const paginationRange = useMemo(() => {
    const totalPages: number = Math.ceil(totalElements / pageSize)

    if (MAX_NUMBER_OF_PAGES >= totalPages) {
      return calculateRange(FIRST_PAGE_INDEX, totalPages)
    }

    const leftSiblingIndex: number = Math.max(currentPage - NUM_PAGES_ADJACENT, FIRST_PAGE_INDEX)
    const rightSiblingIndex: number = Math.min(currentPage + NUM_PAGES_ADJACENT, totalPages)
    const shouldShowLeftDots: boolean = leftSiblingIndex > MAX_ALLOWED_DISTANCE
    const shouldShowRightDots: boolean = rightSiblingIndex < totalPages - MAX_ALLOWED_DISTANCE

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange: Array<number> = calculateRange(FIRST_PAGE_INDEX, MAX_NUMBER_OF_PAGES)

      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const startPageIndex: number = totalPages - MAX_NUMBER_OF_PAGES
      const nextPageIndex: number = startPageIndex + 1
      const rightRange: Array<number> = calculateRange(nextPageIndex, totalPages)
      return [FIRST_PAGE_INDEX, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange: Array<number> = calculateRange(leftSiblingIndex, rightSiblingIndex)
      return [FIRST_PAGE_INDEX, DOTS, ...middleRange, DOTS, totalPages]
    }

    return []
  }, [totalElements, currentPage, pageSize])

  return {
    paginationRange,
  }
}
