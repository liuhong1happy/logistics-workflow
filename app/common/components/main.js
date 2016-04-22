'use strict'
var React = require('react');
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  Dimensions
} = require('react-native')

var {height, width} = Dimensions.get('window');

var HomeView = require('./home/home')
var HomeIndexView = require('./home/home-index')
var SendView = require('./send/send')
var SendIndexView = require('./send/send-index')
var SearchView = require('./search/search')
var SearchIndexView = require('./search/search-index')
var UserView = require('./user/user')
var UserIndexView = require('./user/user-index')
var UserLoginView = require('./user/user-login')

var router = require('./base/react-native-router')
var Route = router.Route;
var Router = router.Router;
var History = router.History;

var SystemStore = require('../stores/system-store')
var {EventTypes} = require('../constants/system-constants')

var MainApp = React.createClass({
	componentDidMount:function(){
		SystemStore.addChangeListener(EventTypes.RECEIVED_USER_INFO,this.handleUserDataChange);
	},
	componentWillUnmount:function(){
		SystemStore.removeChangeListener(EventTypes.RECEIVED_USER_INFO,this.handleUserDataChange);
	},
	handleUserDataChange:function(){
		var user = SystemStore.getUserInfo();
		if(!(user && user.user_id) && History.curRoute.name!="/user/login"){
			History.pushRoute("/user/login");
		}else{
			
		}
	},
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
								<Route component={UserLoginView} path="login"></Route>
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