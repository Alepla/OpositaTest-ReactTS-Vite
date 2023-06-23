import { ReactElement, useState } from "react"
import { usePagination } from "../../../hooks/usePagination"
import { DOTS } from "../../../shared/pagination"
import "./pagination.css"

interface PaginationProps {
  postsPerPage: number
  totalPosts: number
  onSelectPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, onSelectPage }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { paginationRange } = usePagination(totalPosts, currentPage, postsPerPage)

  const handleSelectPage = (element: number): void => {
    setCurrentPage(element)
    onSelectPage(element - 1)
  }

  const isActive = (element: number): string => {
    let result: string = ""
    if (element == currentPage) {
      result = "-active"
    }
    return result
  }

  if (paginationRange!.length < 2) {
    return null
  }

  const areDots = (button: string | number): boolean => {
    return button == DOTS
  }

  const createButtons = (): Array<ReactElement> => {
    const result: Array<ReactElement> = []

    for (const [index, button] of paginationRange!.entries()) {
      if (!areDots(button)) {
        result.push(
          <button
            onClick={() => {
              handleSelectPage(Number(button))
            }}
            className={`pagination-button${isActive(Number(button))}`}
            key={button + String(index)}
            aria-label={`pageButton ${Number(button)}`}
          >
            {button}
          </button>
        )
      }
      if (areDots(button)) {
        result.push(
          <button className="dots" key={button + String(index)} disabled>
            {DOTS}
          </button>
        )
      }
    }

    return result
  }

  return (
    <div className="pagination-container">
      <div className="pagination">{createButtons()}</div>
    </div>
  )
}

export default Pagination