const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/users"
router.route("/")
    .get(commentsController.findAll)
    .post(commentsController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(commentsController.findById)
    .put(commentsController.update)
//dont think we'll need a delete option since none of the users will be deleting anything
//   .delete(ticketsController.remove);

module.exports = router;
