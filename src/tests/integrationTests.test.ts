import request from 'supertest'
import App from '../App'

const app = App()

describe('POST /endpoint-1', () => {
  it('responds with json', async () => {
    await request(app)
      .post('/endpoint-1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
