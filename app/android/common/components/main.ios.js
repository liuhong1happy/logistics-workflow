'use strict'
var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TabBarIOS,
  Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var HomeView = require('./home/home')
var HomeIndexView = require('./home/home-index')
var SendView = require('./send/send')
var SendIndexView = require('./send/send-index')
var SearchView = require('./search/search')
var SearchIndexView = require('./search/search-index')
var UserView = require('./user/user')
var UserIndexView = require('./user/user-index')

var router = require('./base/react-native-router')
var Route = router.Route;
var Router = router.Router;

var MainApp = React.createClass({
    render:function(){
        return (<View style={styles.main}>
                {this.props.children}
            </View>)
    }
})

var RouterApp = React.createClass({
    render:function() {
        return (<Router defaultRoute="/home/index" path="/" component={MainApp}>
                        <Route component={HomeView} path="home">
                                <Route component={HomeIndexView} path="index"></Route>
                        </Route>
                        <Route component={SendView} path="send">
                                <Route component={SendIndexView} path="index"></Route>
                        </Route>
                        <Route component={SearchView} path="search">
                                 <Route component={SearchIndexView} path="index"></Route>
                        </Route>
                        <Route component={UserView} path="user">
                                <Route component={UserIndexView} path="index"></Route>
                        </Route>
                </Router>)
    },
})
        
var styles = {
    main:{
        height:height,
        width:width
    }
}
    
module.exports = RouterApp;