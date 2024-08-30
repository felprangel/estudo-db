const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/new", userController.getNewUser);
userRouter.post("/new", userController.createUser);

module.exports = userRouter;
