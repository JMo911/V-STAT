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

module.exports = router;
