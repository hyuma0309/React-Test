import React, { useCallback, useState } from 'react'
import { ChildOne } from '../components/Memo/ChildrenOne'
import { ChildTwo } from '../components/Memo/ChildTwo'

const callBackParent = () => {
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(true)

  console.log('親コンポーネント-レンダリングされました')

  const countUp = useCallback(() => {
    setCount((count) => count + 1)
  }, [count])

  const checkedBoolean = useCallback(() => {
    setCheck((check) => !check)
  },[check])

  return (
    <div className="w-60 mx-auto mt-40">
      <p>親コンポーネント</p>
      <ChildOne countUp={countUp} />
      <ChildTwo checkedBoolean={checkedBoolean} />
    </div>
  )
}

export default callBackParent