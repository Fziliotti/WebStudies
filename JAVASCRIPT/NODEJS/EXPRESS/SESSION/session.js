const express = require("express");
const parseurl = require("parseurl");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

app.use((req, res, next) => {
  if (!req.session.views) req.session.views = {};

  // get the url pathname
  var pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.get("/foo", (req, res, next) =>
  res.send(`you viewed this page ${req.session.views["/foo"]} times`)
);

app.get("/foo/exit", (req, res, next) => {
  console.log(req.session);
  req.session.destroy(err => {
    return res.send("Sessão foo destroida");
  });
});

app.get("/bar", (req, res, next) =>
  res.send(`you viewed this page ${req.session.views["/bar"]} times`)
);

app.get("/bar/exit", (req, res, next) => {
  console.log(req.session);
  req.session.destroy(err => {
    return res.send("Sessão bar destroida");
  });
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3000, (req, res) => {
  console.log("App rodando na porta http://localhost:3000");
});
