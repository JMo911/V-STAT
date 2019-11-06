const router = require("express").Router();
const ticketsController = require("../../controllers/ticketsController");

// Matches with "/api/users"
router.route("/")
    .get(ticketsController.findAll)
    .post(ticketsController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(ticketsController.findById)
    .put(ticketsController.update)

router
.route("/:id/tasks")
.get(ticketsController.findTasksByticketId)

router
.route("/:id/comments")
.get(ticketsController.findCommentsByticketId)


module.exports = router;
