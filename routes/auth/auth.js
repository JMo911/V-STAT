// import passport from 'passport';
// import jwt from 'jsonwebtoken';
// // import models from '../../models';
// export default function (app) {
//      app.post('/auth', function(request, response) {
//          console.log(
//              request.body
//          );
//         // passport.authenticate(
//         //     'local',
//         //     {session: false},
//         //     function(error, user, info) {
//         //         if (error || !user) {
//         //             return response.status(403).json({
//         //                 message: 'Unable to Authorize',
//         //                 user   : user,
//         //                 error  : error,
//         //                 info: info
//         //             });
//         //         }
//         //         request.login(user, {session: false}, function(error) {
//         //             if (error) {
//         //                 response.send(error);
//         //             }
//         //             var sanitizedUser = {
//         //                 id: user.id,
//         //                 lastName: user.lastName
//         //             };

//         //             // generate a signed json web token with the contents of user object and return it in the response
//         //             const token = jwt.sign(sanitizedUser, 'your_jwt_secret');
//         //             response.json(
//         //                 {
//         //                     user: sanitizedUser,
//         //                     token: token
//         //                 }
//         //             );
//         //         });
//         //     }
//         // )(request, response);
//     });
//     //  app.post('/api/users', (request, response) => {
//     //      const body = request.body;
//     //     models.user.create({
//     //         lastName: body.lastName,
//     //         caseNumber: body.caseNumber,
//     //     }).then(() => {
//     //         response.send();
//     //     })

//     //  });
// }