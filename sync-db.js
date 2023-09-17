const sequelize = require("../config/sequelize");
const User = require("../models/user.model");

async function syncDB() {
  try {
    await sequelize.sync({ force: true });
    await User.sync({ force: true });
    console.log("Database and tables synchronized.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

syncDB();
