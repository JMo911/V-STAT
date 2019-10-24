import dotEnv from 'dotenv';
dotEnv.config();
import express from 'express';
// import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import LocalStrategy from './strategies/local';
import JWTStrategy from './strategies/jwt';

const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


passport.use(LocalStrategy);
passport.use(JWTStrategy);

// import exampleRoutes from './routes/example';

// app.use('/api/examples', exampleRoutes(app));

import authRoutes from './routes/auth';
authRoutes(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
