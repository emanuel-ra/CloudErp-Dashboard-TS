import React from 'react'

export interface IPagination {
  pageCount: number
  pageIndex: number
  setPageIndex: (page: number) => void
}
export interface IPages {
  goToPage: (page: number) => void
  canPreviousPage: boolean
  canNextPage: boolean
  pageCount: number
  pageIndex: number
}
export interface IPageButton {
  content: string | number | React.ReactNode
  onClick: () => void
  active?: boolean
  disabled?: boolean
}
