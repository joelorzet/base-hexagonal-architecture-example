// user.controller.js
const { storeService } = require("../../store/store.service.js");
const {
  userService,
} = require("../../user/application/services/user.service.js");

/**
 * UserController handles HTTP requests for user operations, acting as a layer to
 * manage data transformations between incoming request DTOs and domain models.
 */
class UserController {
  BASE_PATH = "user";

  /**
   * Handles GET requests to retrieve all users.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @param {Function} next - The next middleware function.
   * @returns {Object} JSON response containing all users.
   */
  index(req, res, next) {
    try {
      const users = userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Handles GET requests to retrieve a specific user along with their store information.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @param {Function} next - The next middleware function.
   * @returns {Object} JSON response containing user information and store details.
   */
  getUser(req, res, next) {
    try {
      const userId = req.params.id; // Assuming the ID is passed in the URL parameters
      const user = userService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const storeData = storeService.getStore();
      return res.json({
        user,
        store: storeData,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Handles POST requests to create a new user.
   * @param {Object} req - The HTTP request object containing the user data in the body.
   * @param {Object} res - The HTTP response object.
   * @param {Function} next - The next middleware function.
   * @returns {Object} JSON response containing the newly created user.
   */
  createUser(req, res, next) {
    try {
      const { body } = req;
      const createdUser = userService.createUser(body);
      return res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  }
}

// Export an instance of UserController for application use
const userController = new UserController();

module.exports = { userController };
