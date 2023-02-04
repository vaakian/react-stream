import React from 'react'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import express from 'express'
import { App } from './src/App'
const app = express()
const port = 3000

app.use('/async', (_, response) => {
  // render suspense to stream
  const appStream = renderToPipeableStream(React.createElement(App))
  appStream.pipe(response)
})

app.use('/sync', (_, response) => {
  // directly render suspense to string
  const html = renderToString(React.createElement(App))
  response.write(html)
  response.end()
})

app.use('/', (_, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(`
  <h2><a href="/sync" target="_blank">sync</a></h2>
  <h2><a href="/async" target="_blank">async</a></h2>
  `)
  response.end()
})

app.listen(port, () => {
  console.log(`app running: http://localhost:${port}`)
})
