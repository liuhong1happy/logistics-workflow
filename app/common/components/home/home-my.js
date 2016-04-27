var React = require('react');
var {
	View,
	Text,
	StyleSheet,
	ScrollView
} = require('react-native');

var SystemStore = require('../../stores/system-store');
var {ContentContainer} = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');
var {History} = require('../base/react-native-router')
var Dimensions = require('../base/react-native-dimensions');

var HomeMyView = React.createClass({
	onNavIconPress:function(){
		History.popRoute();
	},
	render:function(){
		var my = SystemStore.getMySendInfoByFormKey(this.props.form_key);
		return (<ContentContainer>
                        <ToolBar navIcon={{title:"返回"}} logo={{}} title="首页" subtitle="当前状态：在线" onNavIconPress={this.onNavIconPress}
							actions={[]}></ToolBar>
                        <ScrollView>
							<View style={styles.base}>
								<View style={[styles.baseItem,styles.highLight]}>
									<View><Text style={styles.highLightText}>{my.source.city.text}</Text></View>
									<View><Text style={styles.highLightText2}>==></Text></View>
									<View><Text style={styles.highLightText}>{my.target.city.text}</Text></View>
								</View>		
								<View style={styles.baseItem}>
									<View><Text style={styles.otherText}>{"账号："+my.user_name}</Text></View>
									<View><Text style={styles.otherText}>{"频率："+my.frequency.text}</Text></View>
								</View>	
							</View>
							<View style={styles.other}>
									<View><Text style={styles.otherText}>{"联系方式："+my.mobile}</Text></View>
									<View><Text style={styles.otherText}>{"时间："+my.date.text}</Text></View>
							</View>
						</ScrollView>
					</ContentContainer>)
	}
})
		
var styles = StyleSheet.create({
	base:{
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
		marginTop:Dimensions.size["8"]
	},
	baseItem:{
		flex:1
	},
	highLight:{
		backgroundColor:"#fff",
		borderColor:"#dbdbdb",
		borderWidth:1,
		borderStyle:"solid",
		marginHorizontal:Dimensions.size["2"]
	},
	highLightText:{
		color:"#ee9900",
		fontSize:Dimensions.size["12"],
		textAlign:"center"
	},
	highLightText2:{
		fontSize:Dimensions.size["12"],
		textAlign:"center",
		color:"#0099ee"
	},
	other:{
		
	},
	otherText:{
		fontSize:Dimensions.size["6"],
		textAlign:"left",
		color:"#333",
		marginTop:Dimensions.size["4"],
		marginLeft:Dimensions.size["2"]
	}
})

module.exports = HomeMyView;