import React from "react"
import TestUtils from "react-addons-test-utils"
import App from "app"
import { assert } from "chai"

describe("App component", () => {

  it("Display headline", () => {
    const rendered = TestUtils.renderIntoDocument(<App />)

    const comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h1')
    assert.strictEqual(comp.textContent, "Insert Tic Tac Toe here.")
  })

})
