import { Router } from "express";
import CategoryController from "../controllers/CategoryController"

const CategoryRouter = Router();

CategoryRouter.route("/").get(CategoryController.getAllCategories);
CategoryRouter.route("/:id").get(CategoryController.getCategory);
CategoryRouter.route("/").post(CategoryController.addCategory);
CategoryRouter.route("/:id").put(CategoryController.updateCategory);
CategoryRouter.route("/:id").delete(CategoryController.deleteCategory);


export default CategoryRouter;