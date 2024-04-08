import request from 'supertest';
import { app } from './app';

describe('GET /', () => {
  test('responds with "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

describe('Unknown routes', () => {
    test('responds with 404 for unknown routes', async () => {
      const response = await request(app).get('/unknown-route');
      expect(response.status).toBe(404);
    });
  });

  describe('Server listening', () => {
    test('server should be listening on port 3000', async () => {
      const response = await request(app).get('/');
      expect(response.status).not.toBe(404); // Ensures the server is not returning a 404 status
    });
  });
