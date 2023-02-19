import React from 'react'

interface iPagination {
  pagesArray: number[]
  page: number
  changePage: (value:number) => void
}

export const Pagination = ({pagesArray,page,changePage}:iPagination) => {
  return (
    <div className="page-wrapper">
    {pagesArray.map((p) => (
      <span
        key={p}
        className={page === p ? 'page page-active' : 'page'}
        onClick={() => changePage(p)}>
        {p}
      </span>
    ))}
  </div>
  )
}
