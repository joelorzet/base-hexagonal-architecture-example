/**
 * Middleware to log request data and validate the host.
 *
 * This middleware logs a message and the hostname of the incoming request.
 * If the hostname is not 'localhost', it responds with an error message.
 * Otherwise, it proceeds to the next middleware in the stack.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @param {Function} next - The next middleware function to call.
 */
function checkValidUser(req, res, next) {
  console.log("Logging middleware activated. Processing request...");
  console.log("Hostname:", req.hostname);

  // Validate the hostname
  if (req.hostname !== "localhost") {
    return res
      .status(400)
      .json({ error: "El host no puede ser diferente de un entorno local." });
  }

  // Proceed to the next middleware or route handler
  next();
}

module.exports = { checkValidUser };
