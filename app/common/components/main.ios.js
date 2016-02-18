'use strict'
var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TabBarIOS
} = React;

var HomeView = require('./home')
var SendView = require('./send')
var SearchView = require('./search')
var UserView = require('./user')

var MainApp = React.createClass({
    getInitialState:function(){
        return {
            selectedTab:"home"
        }
    },
    _onPress:function(){
      console.log(this.props)  
    },
    render:function() {
        return (
      <TabBarIOS tintColor="#0485A9" barTintColor="white">
        <TabBarIOS.Item title="首页" systemIcon="bookmarks" selected={this.state.selectedTab === 'home'} onPress={()=>{ this.setState({selectedTab:"home"})}}><HomeView/></TabBarIOS.Item>
        <TabBarIOS.Item title="搜索" systemIcon="search" selected={this.state.selectedTab === 'search'} onPress={()=>{ this.setState({selectedTab:"search"})}}><SearchView/></TabBarIOS.Item>
        <TabBarIOS.Item title="发布" systemIcon="more" selected={this.state.selectedTab === 'send'} onPress={()=>{ this.setState({selectedTab:"send"})}}><SendView/></TabBarIOS.Item>
        <TabBarIOS.Item title="我" systemIcon="contacts" selected={this.state.selectedTab === 'user'} onPress={()=>{ this.setState({selectedTab:"user"})}}><UserView/></TabBarIOS.Item>
      </TabBarIOS>)
    },
    
})
    
module.exports = MainApp;