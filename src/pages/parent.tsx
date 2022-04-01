import React, { useState } from 'react'
import TestChildren from '../components/Memo/testChildren'

const parent = () => {
  //    [状態変数、状態を変更するための関数] = useState(状態の初期値)
  const [count, setCount] = useState(0)

  console.log('親コンポーネント-レンダリングされました')
  console.log(`親コンポーネント-${count}回目`)

  // 更新関数
  const countUp = () => {
    setCount((count) => count + 1)
  }
  return (
    <div className="w-60 mx-auto mt-40">
      <button type="button" onClick={countUp}>
        Count UP
      </button>
      <TestChildren  text="親から子へプロップス" />
    </div>
  )
}

export default parent