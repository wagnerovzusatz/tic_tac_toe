require("index.html")
require("stylesheets/style.sass")

import React from "react"
import ReactDOM from "react-dom"
import App from "./app/comp"
ReactDOM.render(<App />, document.getElementById("app"))