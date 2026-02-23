import express from 'express';
import { getProductData, postProductData } from '../controllers/productcontroller.js';

const productRouter = express.Router();
productRouter.get("/", getProductData);
productRouter.post("/", postProductData);

export default productRouter;