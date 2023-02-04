import React from 'react'
import { Suspense } from 'react'
import { User, AsyncUser } from './components'

// don't cache the async component
//@ts-ignore
const { _status, _result } = AsyncUser._payload

export const App = () => {
  //@ts-ignore
  AsyncUser._payload._status = _status
  //@ts-ignore
  AsyncUser._payload._result = _result

  return (
    <div>
      <User />
      <Suspense fallback={<div>loading...</div>}>
        <AsyncUser key={Math.random()} />
      </Suspense>
    </div>
  )
}
