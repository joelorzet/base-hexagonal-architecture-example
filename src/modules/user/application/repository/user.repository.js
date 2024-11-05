const UserModel = require("../../domain/User.js");

/**
 * Abstract class representing a User Repository.
 * This class provides the base structure for database interactions
 * related to user data and defines required methods for subclasses.
 */
class UserRepository {
  /**
   * Retrieves all users from the database.
   * @returns {Array<UserModel>} Array of user domain objects.
   * @throws {Error} If the method is not implemented in a subclass.
   */
  getAll() {
    throw new Error("Method 'getAll()' must be implemented.");
  }

  /**
   * Retrieves a user by their ID.
   * @param {string|number} id - The ID of the user to retrieve.
   * @returns {UserModel|null} The user domain object if found, otherwise null.
   * @throws {Error} If the method is not implemented in a subclass.
   */
  getById(id) {
    throw new Error("Method 'getById(id)' must be implemented.");
  }

  /**
   * Creates and stores a new user in the database.
   * @param {Object} userData - The data for the user to create.
   * @param {string|number} userData.id - The ID of the user.
   * @param {string} userData.name - The name of the user.
   * @returns {UserModel} The created user domain object.
   * @throws {Error} If the method is not implemented in a subclass.
   */
  create(userData) {
    throw new Error("Method 'create(userData)' must be implemented.");
  }
}

module.exports = { UserRepository };
