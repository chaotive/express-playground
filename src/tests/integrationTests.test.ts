import request from 'supertest'
import App from '../App'
import Redis from 'ioredis'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const RedisMock = require('ioredis-mock') as typeof Redis

const app = App(new RedisMock())

describe('POST /endpoint-1', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .post('/endpoint-1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(res.body.result).toBe('undefined - 1 {}')
  })
})
