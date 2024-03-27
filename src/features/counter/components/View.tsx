'use client'

import useCounter from '../useCounter'

export default function View() {
  const { count } = useCounter()
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
    </div>
  )
}
