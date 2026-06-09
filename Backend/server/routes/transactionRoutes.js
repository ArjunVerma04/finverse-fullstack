const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// CREATE transaction
router.post("/", protect, createTransaction);

// GET all transactions of logged-in user
router.get("/", protect, getTransactions);

// GET single transaction
router.get("/:id", protect, getTransactionById);

// UPDATE transaction
router.put("/:id", protect, updateTransaction);

// DELETE transaction
router.delete("/:id", protect, deleteTransaction);

module.exports = router;