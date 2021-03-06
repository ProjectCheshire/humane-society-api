'use strict'
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import Schema from '../api/Schema'
import driver from '../database'
import express from 'express'
import { json } from 'body-parser'

const PORT = 4000
const server = express()
const URL = `http://localhost:${PORT}/graphiql`

server.get(`/`, (request, response) => {
  response.send(`
    <style>
      center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
      }
    </style>
    <center>
      <h1>Visit <a href="${URL}">${URL}</a> in a browser.</h1>
    </center>
  `)
})

server.use(`/graphiql`, json(), graphiqlExpress({
  endpointURL: `/graphql`,
  query: `mutation testSetup($u:UserInput, $a:AnimalInput) {
  createUser(input: $u) {
    name
  }
  createAnimal(input: $a) {
    name
  }
}`
}))

server.use(`/graphql`, json(), graphqlExpress({
  context: { db: driver() },
  formatError: console.error,
  schema: Schema
}))

server.listen(PORT, () => {
  console.log(`Server started at ${(new Date()).toString()}
Visit ${URL} in a browser.`)
})

export default server
