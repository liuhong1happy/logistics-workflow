'use strict'
var React = require('react');
var {
    ListView,
    View,
	RecyclerViewBackedScrollView,
	StyleSheet
} = require('react-native');
var TabBars = require('../base/tabbars');
var {ContentContainer}  = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');
var { Link,History } = require('../base/react-native-router');
var { Button,TextInput } = require('../base/react-native-form');
var Dimensions = require('../base/react-native-dimensions');

var UserLoginView = React.createClass({
    render:function(){
        return (<ContentContainer style={styles.container}>
                    <ToolBar navIcon={{}} logo={{}} title="登陆" subtitle="" actions={[]}></ToolBar>
                    <View style={styles.form}>
							<View style={styles.inputView}>
								<TextInput placeholder="请输入用户名" autoFocus={true} style={styles.input}></TextInput> 
							</View>
							<View style={styles.inputView}>
								<TextInput placeholder="请输入密码" style={styles.input}></TextInput> 
							</View>
							<Button title="登陆" style={styles.button} textAlign="center"></Button>
					</View>			  	
                </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	  form: {
			flexDirection: "column",
			justifyContent: 'center',
		  	width:Dimensions.screenWidth,
		  	height:Dimensions.screenHeight,
		    alignItems:"center",
		    marginTop:-Dimensions.size["12"]
	  },
	  inputView:{
		  borderBottomWidth:1,
		  borderBottomColor:"red",
		  borderStyle:"solid",
		  marginBottom:Dimensions.size["2"]
	  },
	  input:{
		  height:Dimensions.size["12"],
		  width:Dimensions.size["64"],
		  fontSize:Dimensions.size["6"]
	  },
	  button:{
		  width:Dimensions.size["64"],
		  height:Dimensions.size["12"],
		  backgroundColor:"#3399ff",
		  borderBottomLeftRadius:Dimensions.size["2"],
		  borderBottomRightRadius:Dimensions.size["2"],
		  borderTopLeftRadius:Dimensions.size["2"],
		  borderTopRightRadius:Dimensions.size["2"],
		  marginTop:Dimensions.size["6"]
	  },
	container:{
		backgroundColor:"#f0f0f0"
	}
})

module.exports = UserLoginView;