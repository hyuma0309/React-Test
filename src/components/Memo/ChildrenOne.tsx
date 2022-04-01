import React, { memo, VFC } from 'react'

type Props = {
  countUp: () => void
}

export const ChildOne: VFC<Props> = memo(({ countUp }) => {
  console.log('ChildOne-レンダリングされました')

  return (
    <div>
      <button onClick={countUp}>CountUp</button>
    </div>
  )
})