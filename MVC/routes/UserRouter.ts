import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router()

UserRouter.route("/").get(UserController.getAllUsers);
UserRouter.route("/:id").get(UserController.getUser);
UserRouter.route("/").post(UserController.addUser);
UserRouter.route("/:id").put(UserController.updateUser);
UserRouter.route("/:id").delete(UserController.deleteUser);
UserRouter.route("/login").post(UserController.loginUser);

export default UserRouter;