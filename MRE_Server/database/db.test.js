import db from "./db";
import { describe, expect, test } from '@jest/globals';
import { add } from './db';


describe("Database", () => {
    test("should connect to the database", async () => {
        const result = await db`select version()`;
        expect(result).toBeTruthy();
    });
    afterAll(async () => {
        await db.end();
    });    
});

describe('Database Connection', () => {
    test('should export the database connection function', () => {
      // Assert
      expect(typeof db).toBe('function');
    });
  });

  describe('Utility Functions', () => {
    test('add should correctly add two numbers', () => {
      // Arrange
      const a = 3;
      const b = 5;
      const expectedResult = 8;
  
      // Act
      const result = add(a, b);
  
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

