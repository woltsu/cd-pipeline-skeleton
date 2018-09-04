const supertest = require('supertest')
const { app, server } = require('../../src/server')
const api = supertest(app)

test('example test', async () => {
  await api
    .get('/')
    .expect(200)
})

afterAll(() => {
  server.close()
})