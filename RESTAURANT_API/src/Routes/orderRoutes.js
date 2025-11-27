import express from "express";
import { body } from "express-validator";
// import auth from "../Middleware/auth.js";
import {
  getOrder,
  getOrders,
  createOrder,
  updateOrderStatus,
  updateOrder,
} from "../Controllers/orderCotrollers.js";

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOrder);

router.post(
  "/add",
  [body("customerId").notEmpty().withMessage("CustomerID is required!")],
  createOrder
);

router.put(
  "/update-status/:id",
  [
    body("status")
      .isIn([
        "Order Placed",
        "Order Preparing",
        "Order Delivered",
        "Order Cancelled",
      ])
      .withMessage("Invalid status!"),
  ],
  updateOrderStatus
);
router.put(
  "/update-order/:id",
  [body("menuItemId").notEmpty().withMessage("Menu Item is required!")],
  updateOrder
);

export default router;