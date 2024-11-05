// user.service.js
const {
  userRepository,
} = require("../../infrastructure/persistence/user.repository.js");

/**
 * UserService handles the business logic related to users, interacting with the repository.
 * This service abstracts data operations and provides methods to manipulate user data.
 */
class UserService {
  /**
   * Retrieves all users from the repository.
   * @returns {Array} List of all users.
   */
  getAllUsers() {
    return userRepository.getAll();
  }

  /**
   * Retrieves a user by their unique ID.
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Object|null} The user object if found, or null if no user is found.
   */
  getUserById(id) {
    return userRepository.getById(id);
  }

  /**
   * Creates a new user using the provided data.
   * @param {Object} userData - The data to create a new user.
   * @param {string} userData.id - The user's ID.
   * @param {string} userData.name - The user's name.
   * @returns {Object} The newly created user.
   */
  createUser(userData) {
    return userRepository.create(userData);
  }
}

const userService = new UserService();

module.exports = { userService };
