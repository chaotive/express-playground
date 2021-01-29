import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import Redis from 'ioredis'
import { Environments, IRequestBody1, IResponseBody1 } from './typings'
import { getNumberAndAdd1 } from './helpers'

const App = () => {
  const app = express()
  app.use(express.json())
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  const redis = new Redis()

  app.post<any, IResponseBody1, IRequestBody1>('/endpoint-1', async (req, res) => {
    try {
      const env: Environments = req.body.env
      const operations = getNumberAndAdd1(await redis.get('operations'))
      await redis.set('operations', operations)
      await redis.set('ts', Date.now())
      res.send({ result: `${env} - ${operations} ${JSON.stringify(req.body)}` })
    } catch (err) {
      res.status(500)
      res.send(err)
    }
  })

  return app
}

export default App
