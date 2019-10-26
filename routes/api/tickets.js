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
//dont think we'll need a delete option since none of the users will be deleting anything
//   .delete(ticketsController.remove);

module.exports = router;
