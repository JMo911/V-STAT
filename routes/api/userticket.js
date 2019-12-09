const router = require("express").Router();
const userTicketsController = require("../../controllers/userTicketsController");

// Matches with "/api/tickets"
router.route("/")
    .get(userTicketsController.findAll);

// Matches with "/api/usertickets/custID/mechID"
router.route("/:customerID/:mechanicID")
    .post(userTicketsController.create);    

// Matches with "/api/tickets/:id"
// router
//     .route("/:id")
//     .get(userTicketsController.findById)
//     .put(userTicketsController.update)

// router
// .route("/:id/tasks")
// .get(userTicketsController.findTasksByticketId)

// router
// .route("/:id/comments")
// .get(userTicketsController.findCommentsByticketId)


module.exports = router;
