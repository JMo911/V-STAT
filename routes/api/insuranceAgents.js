const router = require("express").Router();
const insuranceAgentsController = require("../../controllers/insuranceAgentsController");

// Matches with "/api/users"
router.route("/")
    .get(insuranceAgentsController.findAll)
    .post(insuranceAgentsController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(insuranceAgentsController.findById)
    .put(insuranceAgentsController.update)
//dont think we'll need a delete option since none of the users will be deleting anything
//   .delete(insuranceAgentsController.remove);

module.exports = router;
