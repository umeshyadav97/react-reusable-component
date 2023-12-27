import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

function InfiniteScroll({ children, next, hasMore, scrollThreshold, scrollBy, loader }) {
  const currentLengthRef = useRef()

  const [loading, setLoading] = useState(false)
  const childLists = React.Children.toArray(children.props.children)
  const list = [...childLists]
  const container = React.cloneElement(children, [], null)

  useEffect(() => {
    currentLengthRef.current = childLists.length
  }, [])

  // Check the length of current list and childlist
  useEffect(() => {
    if (currentLengthRef.current <= childLists.length) {
      setLoading(false)
    }
    currentLengthRef.current = childLists.length
  }, [childLists.length])

  useEffect(() => {
    if (!hasMore) {
      setLoading(false)
    }
  }, [hasMore])

  // Scroll method to check scroll height either it is bottom or top
  const onScroll = (evt) => {
    const { clientHeight, scrollTop, scrollHeight } = evt.target

    if (loading) return

    if (
      Math.ceil(clientHeight + scrollTop) + scrollThreshold >= scrollHeight &&
      hasMore &&
      scrollBy === "bottom"
    ) {
      setLoading(true)
      next()
    }

    if (!(scrollTop - scrollThreshold) && hasMore && scrollBy === "top") {
      setLoading(true)
      next()
    }
  }

  if (scrollBy === "bottom") {
    if (loader && loading) {
      list.push(loader)
    }
  } else {
    if (loader && loading) {
      list.unshift(loader)
    }
  }

  return React.cloneElement(container, { onScroll }, list)
}

InfiniteScroll.propTypes = {
  next: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  scrollThreshold: PropTypes.number,
  scrollBy: PropTypes.oneOf(["top", "bottom"]),
  loader: PropTypes.node
}
// By default taking the values
InfiniteScroll.defaultProps = {
  hasMore: false,
  scrollThreshold: 0,
  scrollBy: "bottom",
  loader: null
}

export default InfiniteScroll
