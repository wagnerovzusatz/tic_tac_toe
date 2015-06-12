var 
  React = require("react/addons"),
  TestUtils = React.addons.TestUtils,
  App = require("app");
  assert = require("chai").assert;

describe("App component", function(){

  it("Display headline", function() {

    var rendered = TestUtils.renderIntoDocument(
      React.createElement(App)
    );

    comp = TestUtils.findRenderedDOMComponentWithTag(rendered, 'h1');
    assert.strictEqual(comp.getDOMNode().textContent, "Insert Tic Tac Toe here.");
  });

});