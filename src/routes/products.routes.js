//import functions controllers.
import { Router } from "express";
import * as controllers from "../controllers/product.controllers.js";

const router= Router();

router.get("/",controllers.getProducts);

router.get("/:id",controllers.getProductById);

router.post("/",controllers.createProduct);

router.put("/:id",controllers.updateProduct)

router.delete("/:id",controllers.deleteProduct);

export default router