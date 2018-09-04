const supertest = require('supertest')
const { app, server } = require('../../src/server')
const api = supertest(app)

describe('example controller', () => {
  describe('/', () => {
    test('GET', async () => {
      const response = await api.get('/')
      expect(response.status).toBe(200)
      expect(response.text).toBe('Hello world!')
    })
  })
})

afterAll(() => {
  server.close()
})