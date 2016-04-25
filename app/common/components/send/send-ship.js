'use strict'
var React = require('react');
var {
    Text,
    View,
	StyleSheet,
	TouchableOpacity
} = require('react-native');

var TabBars = require('../base/tabbars');
var {ContentContainer} = require('../base/system-container')
var {History} = require('../base/react-native-router');
var ToolBar = require('../base/react-native-toolbar');
var {TextInput,Button} = require('../base/react-native-form')
var SystemStore = require('../../stores/system-store');
var Dimensions = require('../base/react-native-dimensions');
	
var SearchShipView = React.createClass({
	getInitialState:function(){
		return {
			user_info:SystemStore.getUserInfo(),
			form_data:{}
		}
	},
	onNavIconPress:function(){
		History.pushRoute("/send/index")
	},
    render:function(){
		var user_info = this.state.user_info;
		var form_data = this.state.form_data;
        return (
        <ContentContainer>
            <ToolBar navIcon={{title:"返回"}}  logo={{}}  title="新增托运信息" subtitle="" actions={[]} onNavIconPress={this.onNavIconPress}></ToolBar>
            <View style={styles.container}>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>货主</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>货物类型</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>联系电话</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name}  textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>始发地</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>目的地</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>托运工具</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>托运频率</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>具体时间</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="right"></TextInput>
					</View>
				</TouchableOpacity>
				<Button style={styles.button} title="发布"  textAlign="center"></Button>
            </View>
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
		  lineHeight:Dimensions.size["6"],
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

module.exports = SearchShipView;