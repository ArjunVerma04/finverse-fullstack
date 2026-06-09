const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

// DB connect
connectDB();

const app = express();

// ---------------- CORS CONFIG ----------------
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL, // BEST PRACTICE for production
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked"));
    },
    credentials: true,
  })
);

// ---------------- MIDDLEWARE ----------------
app.use(express.json());

// ---------------- ROUTES ----------------
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/customers", require("./routes/customerRoutes")); // ✅ IMPORTANT

// ---------------- HEALTH CHECK ----------------
app.get("/", (req, res) => {
  res.send("FinVerse API Running...");
});

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});