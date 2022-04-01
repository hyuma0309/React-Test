import React, { memo, VFC } from 'react'

type Props = {
  checkedBoolean: () => void
}

export const ChildTwo:VFC<Props> = memo(({checkedBoolean}) => {
  console.log('ChildTwo-レンダリングされました')

  return (
    <div>
      <button onClick={checkedBoolean}>checkedBoolean</button>
    </div>
  )
})