const router = require("express").Router();
const userRoutes = require("./users");
const ticketRoutes = require("./tickets");
const commentRoutes = require("./comments");
const taskRoutes = require("./tasks");

// user routes
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/tickets", ticketRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;