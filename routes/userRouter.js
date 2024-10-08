const { Router } = require("express");
const userController = require("../controller/userController");
const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/new", userController.getNewUser);
userRouter.post("/new", userController.createUser);
userRouter.delete("/", userController.deleteUser);

module.exports = userRouter;
