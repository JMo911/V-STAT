const router = require("express").Router();
const mechanicsController = require("../../controllers/mechanicsController");

// Matches with "/api/users"
router.route("/")
    .get(mechanicsController.findAll)
    .post(mechanicsController.create);

// Matches with "/api/mechanics/:id"
router
    .route("/:id")
    .get(mechanicsController.findById)
    .put(mechanicsController.update)
//dont think we'll need a delete option since none of the users will be deleting anything
//   .delete(mechanicsController.remove);

module.exports = router;
