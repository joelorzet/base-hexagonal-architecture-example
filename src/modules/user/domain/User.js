/**
 * Represents a User in the system.
 */
class User {
  /**
   * Creates an instance of User.
   * @param {number} id - The unique identifier for the user.
   * @param {string} name - The name of the user.
   */
  constructor(id, name) {
    this.id = id;
    this.publicId = this.generatePublicId();
    this.name = name;
  }

  /**
   * Generates a random public ID for the user.
   * @returns {number} A random public ID.
   */
  generatePublicId() {
    return Math.floor(Math.random() * 10000000000); // Generates a random number up to 10 billion
  }
}

module.exports = User;
