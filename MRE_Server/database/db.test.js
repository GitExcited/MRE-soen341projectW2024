import db from "./db";
import { describe, expect, test } from '@jest/globals';
import dotenv from 'dotenv';


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
    afterAll(async () => {
        await db.end();
    }); 
  });

  describe('Environment Variables', () => {
    test('should load environment variables from .env file', () => {
      // Arrange
      dotenv.config(); // Load environment variables from .env file

      // Act
      const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

      // Assert
      expect(PGHOST).toBeDefined();
      expect(PGDATABASE).toBeDefined();
      expect(PGUSER).toBeDefined();
      expect(PGPASSWORD).toBeDefined();
      expect(ENDPOINT_ID).toBeDefined();
    });
    afterAll(async () => {
        await db.end();
    }); 
  });

