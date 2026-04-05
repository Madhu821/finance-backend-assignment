const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");
const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.use(authMiddleware);

// RBAC applied
router.get(
  "/summary",
  authorizeRoles("ADMIN", "ANALYST"),
  dashboardController.getSummary
);

router.get(
  "/categories",
  authorizeRoles("ADMIN", "ANALYST"),
  dashboardController.getCategories
);

module.exports = router;