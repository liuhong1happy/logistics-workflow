var React = require('react-native')
var {
    Text,
    View,
    Navigator,
    Dimensions,
    Platform
} = React;

var router = require('../base/react-native-router');
var History = router.History;
var Link = router.Link;

var tabbar = require('../base/react-native-tabbar');
var TabBar = tabbar.TabBar;
var Tab = tabbar.Tab;

var system = require('../base/system-container')
var {ContentContainer} = system;
    
var HomeIndexView = React.createClass({
    _onPress:function(e,name){
        History.pushRoute(name,0,Navigator.SceneConfigs.FadeAndroid)
    },
    render:function(){
        return (<ContentContainer>
                        <View>
                            <Text>
                                This is Home Index Page!
                            </Text>
                        </View>
                        <Link style={{"backgroundColor":"red"}} name="/search/index" index={0} config={Navigator.SceneConfigs.FadeAndroid}>
                                <Text>To Search</Text>
                        </Link>
                        <TabBar barColor="#bbbbbb">
                            <Tab selected={true} name="/home/index" systemIcon="home" defaultColor="#999" selectedColor="#ee9900" title="首页"></Tab>
                            <Tab systemIcon="search" name="/search/index" defaultColor="#999"  title="搜索" onPress={this._onPress}></Tab>
                            <Tab systemIcon="send" name="/send/index" defaultColor="#999" title="发布" onPress={this._onPress}></Tab>
                            <Tab systemIcon="user" name="/user/index" defaultColor="#999" title="我" onPress={this._onPress}></Tab>
                        </TabBar>
                </ContentContainer>)
    }
})

module.exports = HomeIndexView;