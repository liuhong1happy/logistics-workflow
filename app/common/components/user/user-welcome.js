'use strict'
var React = require('react');
var {
    View,
	StyleSheet,
    Text
} = require('react-native');
var TabBars = require('../base/tabbars');
var {ContentContainer}  = require('../base/system-container')
var { Link,History } = require('../base/react-native-router');
var { Button,TextInput } = require('../base/react-native-form');
var Dimensions = require('../base/react-native-dimensions');

var WebAPIActions = require('../../actions/web-api-actions');
var SystemStore = require('../../stores/system-store');
var {EventTypes} = require('../../constants/system-constants');

var UserWelcomeView = React.createClass({
    render:function(){
        return (<ContentContainer style={styles.container}>
                    <View style={styles.form}>
							<View style={styles.textView}>
								<Text style={styles.title}>Welcome to new world!</Text>
							</View>
							<View style={styles.textView}>
								<Text style={styles.text}>Logistics Workflow</Text>
							</View>
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
		    marginTop:-Dimensions.size["24"]
	  },
	  textView:{
          height:Dimensions.size["16"],
          width:Dimensions.screenWidth-Dimensions.size["6"],
	  },
      title:{
		  lineHeight:Dimensions.size["16"],
          textAlign:"center",
		  fontSize:Dimensions.size["8"],
          color:"#3399ff"
      },
	  text:{
		  lineHeight:Dimensions.size["12"],
          textAlign:"center",
		  fontSize:Dimensions.size["6"],
          color:"#999"
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

module.exports = UserWelcomeView;