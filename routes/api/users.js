const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/user-info").get(usersController.userInfo);

router.route("/")
    .get(usersController.userInfo)
    // .post(usersController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .put(usersController.update)

router
    .route("/:id/tickets")
    .get(usersController.findTicketsByUserId)

   

module.exports = router;
