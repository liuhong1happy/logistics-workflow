'use strict'
var React = require('react');
var {
    Text,
    View,
	TouchableOpacity,
	StyleSheet
} = require('react-native');

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;

var {Link,History} = require('../base/react-native-router');
var ToolBar = require('../base/react-native-toolbar');
var {Button} = require('../base/react-native-form');
var SystemStore = require('../../stores/system-store');
var Dimensions = require('../base/react-native-dimensions');
var {EventTypes} = require('../../constants/system-constants')
   
var WebAPIActions = require('../../actions/web-api-actions');
var SearchIndexView = React.createClass({
	getInitialState:function(){
		return {
			user_info:SystemStore.getUserInfo(),
			form_data:{
				key:"source",
				value:"",
				text:"始发地"
			}
		}
	},
    render:function(){
		var form_data = this.state.form_data;
        return (
        <ContentContainer>
            <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="搜索" subtitle="当前状态：在线" actions={[{title:"更多"}]}></ToolBar>
            <View style={styles.container}>
                
            </View>
            <TabBars name="/search/index"></TabBars>
        </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	  container:{
		  marginTop:Dimensions.size["2"]
	  },
	  formRow:{
          height:Dimensions.size["16"],
          width:Dimensions.screenWidth,
		  flexDirection:"row",
		  alignItems:"center",
		  justifyContent:"center",
		  borderBottomWidth:1,
		  borderStyle:"solid",
		  borderColor:"#dbdbdb",
		  paddingHorizontal:Dimensions.size["6"],
		  backgroundColor:"#fff"
	  },
	  formLabel:{
		  flex:2,
		  height:Dimensions.size["16"],
		  flexDirection:"row",
		  alignItems:"center",
		  justifyContent:"flex-start"
	  },
	  formControl:{
		  flex:5
	  },
	  formInput:{
		  fontSize:Dimensions.size["6"],
		  height:Dimensions.size["16"],
		  color:"#666"
	  },
	  formText:{
		  fontSize:Dimensions.size["6"],
		  lineHeight:Dimensions.size["8"],
		  color:"#666"
	  },
	  disabled:{
		  color:"#dbdbdb"
	  },
	  button:{
		  width:Dimensions.screenWidth,
		  backgroundColor:"#3399ff",
		  height:Dimensions.size["16"],
		  marginTop:Dimensions.size["6"]
	  }
})
module.exports = SearchIndexView;