const { UnauthorizedError, BadRequestError } = require("../utils/errors");
// const db = require("../db");
class User {
  static async login(credentials) {
    throw new UnauthorizedError("Invalid email/password");
  }

  static async register(credentials) {}

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }

    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}

module.exports = User;
