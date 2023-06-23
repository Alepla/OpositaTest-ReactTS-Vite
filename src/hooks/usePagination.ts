import { useMemo } from "react"
import { DOTS } from "../shared/pagination"
import { calcualteRange } from "../helpers/calculateRange"

export const usePagination = (
  totalElements: number,
  currentPage: number,
  pageSize: number = 10,
) => {
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalElements / 10)
    const maxNumberOfPages: number = 5
    const siblingCount: number = 1

    if (maxNumberOfPages >= totalPages) {
      return calcualteRange(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = calcualteRange(1, leftItemCount)

      return [...leftRange, DOTS, totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = calcualteRange(totalPages - rightItemCount + 1, totalPages)
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = calcualteRange(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalElements, currentPage, pageSize])

  return {
    paginationRange,
  }
}