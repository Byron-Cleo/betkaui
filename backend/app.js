const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//1. Set security http
// app.use(helmet());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:3000'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
  );
  res.setHeader(
    'Report-To',
    '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"http://localhost:4005/__cspreport__"}],"include_subdomains":true}'
  );
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' https:; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src 'self'; style-src-elem 'self' 'unsafe-inline' https:;"
  );
  next();
});

//2. Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//DEPLOYING TO HEROKU
const dirname = path.resolve();
// console.log('Project Root Directory Name', dirname);
// console.log('BACKEND Project Root Directory Name', __dirname);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, 'client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(dirname, 'client/build/index.html'))
  );
} else {
  // app.get('/', (req, res) =>
  //   res.send('Gas System API is running....'));

  app.use(express.static(path.join(dirname, 'client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(dirname, 'client/build/index.html'))
  );
}

//All verb is for catching all the http verbs: 404 PAGE
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can\'t find ${req.originalUrl} on this server`, 404));
//   // res.sendFile(path.join(dirname, 'frontend/build/index.html'))
// });

//Error middleware
// app.use(globalErrorHandler);

module.exports = app;
