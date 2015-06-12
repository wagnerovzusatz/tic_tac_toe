require("index.html");
require("stylesheets/style.sass");

var
  React = require("react"),
  App = require("app");

React.render(
  React.createElement(App),
  document.getElementById("app")
);