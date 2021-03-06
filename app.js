/** Express app for pg-relationships-demo */

const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const nunjucks = require('nunjucks')
const moment = require('moment')

// Parse request bodies for JSON
app.use(express.json());
app.use(express.static("public"))

const uRoutes = require("./routes/users");
const bRoutes = require("./routes/boards");
const gRoutes = require('./routes/gifs')
app.use("/users", uRoutes);
app.use('/boards', bRoutes)
app.use("/gifs", gRoutes)

nunjucks.configure("templates", {
  autoescape: true,
  express: app
})

app.get("/", (req, res, next) => {
  res.render("base.html");

})

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError('Not Found', 404);

  // pass err to the next middleware
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message
  });
});



// app.listen(3000, function () {
//   console.log('Server started on 3000');
// });

module.exports = app;