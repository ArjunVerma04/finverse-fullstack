const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

// CREATE
router.post("/", protect, createCustomer);

// GET ALL
router.get("/", protect, getCustomers);

// GET ONE
router.get("/:id", protect, getCustomerById);

// UPDATE
router.put("/:id", protect, updateCustomer);

// DELETE
router.delete("/:id", protect, deleteCustomer);

module.exports = router;