import { useMemo } from "react"
import { DOTS } from "../shared/pagination"
import { calcualteRange } from "../helpers/calculateRange"

export const usePagination = (
  totalElements: number,
  currentPage: number,
  pageSize: number = 10
) => {
  const paginationRange = useMemo(() => {
    const totalPages: number = Math.ceil(totalElements / pageSize)
    const maxNumberOfPages: number = 5
    const siblingCount: number = 1
    const firstPageIndex: number = 1

    if (maxNumberOfPages >= totalPages) {
      return calcualteRange(1, totalPages)
    }

    const leftSiblingIndex: number = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex: number = Math.min(currentPage + siblingCount, totalPages)
    const shouldShowLeftDots: boolean = leftSiblingIndex > 2
    const shouldShowRightDots: boolean = rightSiblingIndex < totalPages - 2

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange: Array<number> = calcualteRange(1, maxNumberOfPages)

      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange: Array<number> = calcualteRange(
        totalPages - maxNumberOfPages + 1,
        totalPages
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange: Array<number> = calcualteRange(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, totalPages]
    }
  }, [totalElements, currentPage, pageSize])

  return {
    paginationRange,
  }
}
