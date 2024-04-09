
import operations from './operations';

import db from "./db";
import { describe, expect, test } from '@jest/globals';



describe('User Operations', () => {
    test('getUser should retrieve a user by username', async () => {
      // Arrange
      const username = 'testuser';
  
      // Act
      const result = await operations.getUser(username);
  
      // Assert
      expect(result).toBeDefined();
    });
  
    test('updateUser should update user email and password', async () => {
      // Arrange
      const username = 'testuser';
      const newEmail = 'newemail@example.com';
      const newPassword = 'newpassword123';
  
      // Act
      const result = await operations.updateUser(username, newEmail, newPassword);
  
      // Assert
      expect(result).toBeTruthy();
  
      const updatedUser = await operations.getUser(username);
      console.log('Updated User:', updatedUser);
      expect(updatedUser).toBeDefined();
    });
  
    afterAll(async () => {
      await db.end();
    });
  });