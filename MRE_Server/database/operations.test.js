
import operations from './operations';


import { describe, expect, test } from '@jest/globals';



  test('getUser should retrieve a user by username', async () => {
    // Arrange
    const username = 'testuser';

    // Act
    const result = await operations.getUser(username);

    // Assert
    expect(result).toBeDefined();
  
  });

  describe('User Operations', () => {
    test('updateUser should update user email and password', async () => {
        // Arrange
        const username = 'testuser';
        const newEmail = 'newemail@example.com';
        const newPassword = 'newpassword123';
      
        // Act
        const result = await operations.updateUser(username, newEmail, newPassword);
      
        // Assert
        expect(result).toBeTruthy();
      
        // Check if user was updated successfully
        const updatedUser = await operations.getUser(username);
        console.log('Updated User:', updatedUser); // Add this line for logging
        expect(updatedUser).toBeDefined();
      });
  
    // Add more test cases for other functions if needed
  });
  
