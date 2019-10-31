const router = require("express").Router();
const userRoutes = require("./users");
// const mechanicRoutes = require("./mechanics");
const ticketRoutes = require("./tickets");
const commentRoutes = require("./comments");
// const insuranceAgentRoutes = require("./insuranceAgents");

// user routes
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
// router.use("/mechanics", mechanicRoutes);
router.use("/tickets", ticketRoutes);
// router.use("/insuranceAgents", insuranceAgentRoutes);

module.exports = router;