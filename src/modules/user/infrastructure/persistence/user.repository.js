const {
  UserRepository,
} = require("../../application/repository/user.repository.js");
const UserModel = require("../../domain/User.js");

const USER_DB = [];

/**
 * UserMysqlRepository extends the abstract UserRepository to provide
 * MySQL-specific functionality for managing user data in a simulated
 * in-memory database. This class returns domain representations of User objects.
 */
class UserMysqlRepository extends UserRepository {
  getAll() {
    return USER_DB;
  }

  /**
   * Retrieves a user by their unique identifier.
   * @param {string|number} id - The ID of the user to retrieve.
   * @returns {UserModel|null} The user domain object if found, otherwise null.
   */
  getById(id) {
    const user = USER_DB.find((user) => user?.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  create({ id, name }) {
    const user = new UserModel(id, name);

    USER_DB.push(user);

    return user;
  }
}

const userRepository = new UserMysqlRepository();

module.exports = { userRepository };
