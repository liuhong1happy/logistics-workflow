'use strict'
var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;

var HomeView = require('./home')
var SendView = require('./send')
var SearchView = require('./search')
var UserView = require('./user')

var MainApp = React.createClass({
    configureScene(route){
      return Navigator.SceneConfigs.FloatFromRight;
    },
    renderScene(router, navigator){
      var Component = null; this._navigator = navigator;
      switch(router.name){
        case "home":
          Component = HomeView;
          break;
        case "send":
          Component = SendView;
          break;
        case "user":
          Component = UserView;
          break;
        default: 
          Component = SearchView;
      }
      return <Component navigator={navigator} />
    },
    render() {
        return (
            <Navigator
                initialRoute={{name: 'home'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

})

var styles = StyleSheet.create({
    container:{
        marginTop:20
    }
})

module.exports = MainApp;