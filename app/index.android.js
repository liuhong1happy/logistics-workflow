'use strict';

var React = require('react-native');
var MainApp = require('./common/components/main');

var {
    AppRegistry
} = React;

var LogisticsWorkflow = React.createClass({
  render: function() {
    return (
      <MainApp />
    );
  }
});

AppRegistry.registerComponent('LogisticsWorkflow', () => LogisticsWorkflow);