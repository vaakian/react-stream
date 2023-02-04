import React from 'react'
export function User() {
  return <div>user</div>
}

const ComponentModule = {
  default: () => (
    <div>async user</div>
  ),
}

export const AsyncUser = React.lazy<React.ComponentType>(function () {
  return new Promise((resolve) => {
    // resolve the component after 2 seconds
    setTimeout(() => resolve(ComponentModule), 2000)
  })
})
