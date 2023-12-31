import { renderHook } from "@testing-library/react"
import { usePagination } from "../../src/hooks/usePagination"

describe("Pagination", () => {
  it("prints only 3 elements", () => {
    const { result } = SUT.renderHook(30, 0, 10)
    const { paginationRange } = result.current

    expect(paginationRange).toStrictEqual([1, 2, 3])
  })

  it("prints 7 elements and the dots are in the 6th position", () => {
    const { result } = SUT.renderHook(150, 0, 10)
    const { paginationRange } = result.current

    expect(paginationRange).toStrictEqual([1, 2, 3, 4, 5, "...", 15])
  })

  it("prints only 7 elements and dots are in the 2nd position", () => {
    const { result } = SUT.renderHook(100, 7, 10)
    const { paginationRange } = result.current

    expect(paginationRange).toStrictEqual([1, "...", 6, 7, 8, 9, 10])
  })

  it("prints only 7 elements and dots are in the 2nd and 6th position", () => {
    const { result } = SUT.renderHook(100, 4, 10)
    const { paginationRange } = result.current

    expect(paginationRange).toStrictEqual([1, "...", 3, 4, 5, "...", 10])
  })

  it("prints only 7 elements and dots are in the 2nd position", () => {
    const { result } = SUT.renderHook(150, 10, 18)
    const { paginationRange } = result.current

    expect(paginationRange).toStrictEqual([1, "...", 5, 6, 7, 8, 9])
  })
})

class SUT {
  static renderHook(totalElements: number, currentPage: number, pageSize: number) {
    return renderHook(() => usePagination(totalElements, currentPage, pageSize))
  }
}
