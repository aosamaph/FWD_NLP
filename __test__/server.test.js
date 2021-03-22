import 'babel-polyfill'
const superTest = require('supertest')
const { app } = require('../src/backend/index')

const request = superTest(app)

describe('Server test', () => {
    test('GET/ responses with 200', async done => {
        const r = await request.get('/test');
        expect(r.status).toBe(200)
        expect(r.body.message).toBe('pass!')
        done()
    })

    test('GET/ responses with 404', async done => {
        const r = await request.get('/');
        expect(r.status).toBe(404)
        done()
    })

})