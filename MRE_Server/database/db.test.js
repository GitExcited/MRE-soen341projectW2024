import { describe, test, expect, afterAll } from '@jest/globals'
import db from './db'

describe('Database', () => {
  test('should connect to the database', async () => {
    const result = await db`select version()`
    expect(result).toBeTruthy()
  })
  afterAll(async () => {
    await db.end()
  })
})
