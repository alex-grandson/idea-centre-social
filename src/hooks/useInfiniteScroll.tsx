import { useState, useRef, useCallback, useEffect } from 'react'

function useInfiniteScroll() {
  const [page, setPage] = useState<number>(1)
  const loadMoreRef = useRef<any>(null)

  const handleObserver = useCallback((entries: any) => {
    const [target] = entries
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(handleObserver, option)

    if (loadMoreRef.current) observer.observe(loadMoreRef.current)
  }, [handleObserver])

  return { loadMoreRef, page }
}

export default useInfiniteScroll
