'use strict';

var React = require('react');
var {
    AppRegistry
} = require('react-native');

var MainApp = require('./common/components/main');
var WebAPIUtils = require('./common/utils/web-api-utils');

// test
WebAPIUtils.initData();

var LogisticsWorkflow = React.createClass({
  render: function() {
    return (
      <MainApp />
    );
  }
});

AppRegistry.registerComponent('LogisticsWorkflow', () => LogisticsWorkflow);
	  
module.exports = LogisticsWorkflow;