'use strict'
var React = require('react');
var {
    Text,
    View,
	StyleSheet,
	Navigator
} =  require('react-native');

var TabBars = require('../base/tabbars');
var {Button} = require('../base/react-native-form');

var system = require('../base/system-container')
var {ContentContainer} = system;

var { History } = require('../base/react-native-router');

var ToolBar = require('../base/react-native-toolbar');
var Dimensions = require('../base/react-native-dimensions');

var SendIndexView = React.createClass({
	handlePress:function(e,name){
		History.pushRoute("/send/"+name,1,Navigator.SceneConfigs.PushFromRight);
	},
    render:function(){
        return (<ContentContainer>
                    <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="发布" subtitle="当前状态：在线" actions={[]}></ToolBar>
                    <View style={styles.buttonView}>
                        <Button title="发布承运信息" style={styles.button} textAlign="center" name="carry" onPress={this.handlePress}/>
                        <Button title="发布托运信息" style={styles.button} textAlign="center" name="ship" onPress={this.handlePress}/>
                    </View>
                    <TabBars name="/send/index"></TabBars>
                </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	buttonView:{
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center",
		height:Dimensions.contentHeight-Dimensions.tabBarHeight-Dimensions.toolBarHeight,
		backgroundColor:"#fff"
	},
	button:{
		width:Dimensions.size["64"],
		height:Dimensions.size["12"],
		marginBottom:Dimensions.size["12"],
		backgroundColor:"#3399ff",
		borderRadius:Dimensions.size["2"]
	},
	
})

module.exports = SendIndexView;