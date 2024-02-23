import { useCallback } from 'react'
import {
  type IPageButton,
  type IPages,
  type IPagination
} from '../../abstraction/Interfaces/IPagination'
import { ChevronLeft, ChevronRight } from '../Icons/Chevron'

const VISIBLE_PAGE_BUTTON_COUNT = 4

export const Pagination = (props: IPagination) => {
  const { pageCount, pageIndex, setPageIndex } = props
  return (
    <div>
      <Pages
        goToPage={setPageIndex}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  )
}

const Pages = (props: IPages) => {
  const { goToPage, canPreviousPage, canNextPage, pageCount, pageIndex } =
    props

  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null

    let numberOfButtons =
      pageCount < VISIBLE_PAGE_BUTTON_COUNT
        ? pageCount
        : VISIBLE_PAGE_BUTTON_COUNT

    const pageIndices = [pageIndex]

    numberOfButtons--;

    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore)
      } else {
        pageIndices.push(pageNumberAfter)
      }
    })

    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <PageButton
          content={pageIndexToMap + 1}
          onClick={() => goToPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ))
  }, [pageCount, pageIndex])

  return (
    <ul className='flex gap-2'>
      <li>
        <PageButton
          content={
            <div className='flex ml-1'>
              <ChevronLeft />
              <ChevronLeft className='-translate-x-1/2' />
            </div>
          }
          onClick={() => goToPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <PageButton
          content={
            <div className='flex ml-1'>
              <ChevronRight />
              <ChevronRight className='-translate-x-1/2' />
            </div>
          }
          onClick={() => goToPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  )
}

const PageButton = (props: IPageButton) => {
  const { content, onClick, disabled, active } = props
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? 'bg-blue-500 text-white' : 'bg-white-500 text-blue-500'}
      ${
        disabled
          ? 'text-blue-300 bg-white/50 dark:bg-gray-800/90 cursor-not-allowed'
          : 'hover:bg-blue-500 hover:text-white'
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
