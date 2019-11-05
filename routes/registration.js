import usersController from "../controllers/usersController"

export default function (app) {
     app.route('/api/registration').post(usersController.create);
}