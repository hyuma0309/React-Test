import { useState } from 'react'

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
const [value, setValue] = useState<string>(typeof window !== 'undefined' ? localStorage.getItem(key) || init : '')

const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
}

return [value, setValueWithStorage]
}