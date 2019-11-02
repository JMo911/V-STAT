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

module.exports = router;
