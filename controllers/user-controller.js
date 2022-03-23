const { User, Thought } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({ path: "users", select: "-__v" })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // createPizza
  createUser({ body }, res) {
    User.create(body)
      .then((dbUseraData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};
module.exports = userController;
