import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'
import { Environments, IRequestBody1, IResponseBody1 } from './typings'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.post<any, IResponseBody1, IRequestBody1>('/endpoint-1', async (req, res) => {
  const env: Environments = req.body.env
  try {
    res.send({ result: env + ' - ' + JSON.stringify(req.body) })
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

app.listen(8080)
