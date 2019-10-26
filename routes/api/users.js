const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
//dont think we'll need a delete option since none of the users will be deleting anything
//   .delete(usersController.remove);

module.exports = router;
