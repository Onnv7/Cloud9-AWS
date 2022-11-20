import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { createCheckout, selectAllCheckoutByUserId, updateCheckout, deleteCheckout, selectCheckout } from "../controllers/checkoutController.js";
const router = express.Router();


// create a new checkout
router.post("/", createCheckout);

// select checkout
router.get("/:id", selectCheckout);

// select all checkout by user id
router.get("/all/:userId", selectAllCheckoutByUserId);

// TODO: kh dung thi xoa
// update checkout
router.patch("/:id", updateCheckout);

// TODO: kh dung thi xoa
// delete checkout
router.delete("/:id", deleteCheckout);

export default router;