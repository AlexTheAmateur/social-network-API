const router = require("express").Router();
const {
  getAllUsers,
  createUser,
} = require("../../controllers/user-controller");

// /api/pizzas
router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
