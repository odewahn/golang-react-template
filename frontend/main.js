(function() {
  // React
  var React = require('react');
  var ReactDOM = require('react-dom');

  var Hello = require("./components/hello");
  ReactDOM.render(<Hello />, document.getElementById('app'));

})();
