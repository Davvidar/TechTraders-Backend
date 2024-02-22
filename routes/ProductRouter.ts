import { Router } from "express";
import  ProductController  from "../controllers/ProductController";


const ProductRouter = Router();

ProductRouter.route("/").get(ProductController.getAllProducts);
ProductRouter.route("/:id").get(ProductController.getProduct);
ProductRouter.route("/category/:name").get(ProductController.getProductByCategory);
ProductRouter.route("/").post(ProductController.addProduct);
ProductRouter.route("/:id").put(ProductController.updateProduct);
ProductRouter.route("/:id").delete(ProductController.deleteProduct);

export default ProductRouter