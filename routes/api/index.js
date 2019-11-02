const router = require("express").Router();
const userRoutes = require("./users");
const ticketRoutes = require("./tickets");
const commentRoutes = require("./comments");

// user routes
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/tickets", ticketRoutes);

module.exports = router;