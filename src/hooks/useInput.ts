import { ChangeEvent, useState } from 'react'

// type UseInput<T> = {
//   value: T
// }
//: [any, (event: ChangeEvent<HTMLInputElement>) => void, () => void]
export default function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue)

  return [
    value,
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    () => setValue(''),
  ]
}
