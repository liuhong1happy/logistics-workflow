'use strict';

var React = require('react');
var {
    AppRegistry
} = require('react-native');

var MainApp = require('./common/components/main');
var WebAPIUtils = require('./common/utils/web-api-utils');
var DateTimeAPIUtils = require('./common/utils/datetime-utils');

DateTimeAPIUtils.init();

var app = React.createClass({
  componentDidMount:function(){
        // test
        WebAPIUtils.initData();
  },
  render: function() {
    return (
      <MainApp ref="root" />
    );
  }
});

AppRegistry.registerComponent('app', () => app);