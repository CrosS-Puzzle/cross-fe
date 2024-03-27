'use client'

import useCounter from '../useCounter'

export default function Control() {
  const { increase, decrease } = useCounter()
  return (
    <div>
      <button type="button" onClick={decrease}>
        Down
      </button>
      <button type="button" onClick={increase}>
        Up
      </button>
    </div>
  )
}
