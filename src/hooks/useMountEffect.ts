import { EffectCallback, useEffect } from 'react'

const useMountEffect = (fun: EffectCallback) => useEffect(fun, [])

export default useMountEffect
