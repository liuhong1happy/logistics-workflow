'use strict'
var React = require('react');
var {
    ListView,
    View,
	StyleSheet,
    Alert,
    AppRegistry,
	Platform,
	Navigator
} = require('react-native');
var TabBars = require('../base/tabbars');
var {ContentContainer}  = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');
var { Link,History } = require('../base/react-native-router');
var { Button } = require('../base/react-native-form');
var Dimensions = require('../base/react-native-dimensions')
var WebAPIActions = require('../../actions/web-api-actions')
var SystemStore = require('../../stores/system-store')

var UserIndexView = React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			buttons:ds.cloneWithRows([
				{
					name:"my_send_msg",
					title:"我发布的信息"
				},
				{
					name:"about",
					title:"关于应用"
				},
				{
					name:"version",
					title:"版本信息"
				},
				{
					name:"upgrade",
					title:"更新"
				},
				{
					name:"exit",
					title:"关闭应用"
				},
				{
					name:"logout",
					title:"退出当前账号"
				}
			])
		}
	},
	_pressRow:function(e,name){
		switch(name){
			case "logout":
                var handle = function(){
					// WebAPIActions.userLogout({});
					SystemStore.clearUserInfo();
                    History.pushRoute("/user/login",0,Navigator.SceneConfigs.PushFromRight);
                }
                Alert.alert("提示","确定要退出当前账号吗？",[{text: '确定', onPress: handle },{text: '取消', onPress: function(){} }]);
				break;
            case "exit":
                var handle = function(){
                    // invalid
                    // AppRegistry.unmountApplicationComponentAtRootTag(1);
                }
                Alert.alert("提示","确定要关闭应用吗？",[{text: '确定', onPress: handle },{text: '取消', onPress: function(){} }]);
                break;
			case "about":
                var handle = function(){
                }
                Alert.alert("关于应用","Logistics Workflow是由Idealsee集团使用ReactNative开发。",[{text: '确定', onPress: handle }]);
                break;
			case "version":
                var handle = function(){
                }
                Alert.alert("版本信息","产品版本v0.0.1,设备版本v"+Platform.Version+"。",[{text: '确定', onPress: handle }]);
                break;
			case "upgrade":
                var handle = function(){
                }
                Alert.alert("更新","产品暂无更新版本",[{text: '确定', onPress: handle }]);
                break;
		}
    },
	_renderRow:function(rowData,sectionID, rowID){
		return (<Button name={rowData.name} title={rowData.title} onPress={this._pressRow} style={styles.button} titleStyle={styles.buttonText}></Button>)
	},
    render:function(){
        return (<ContentContainer>
                    <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="我" subtitle="当前状态：在线" actions={[]}></ToolBar>
                    <View>
                           <ListView style={{marginTop:Dimensions.size["2"]}}
								enableEmptySections={true}
                                dataSource={this.state.buttons}
                                renderRow={this._renderRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
							></ListView>
                    </View>
                    <TabBars name="/user/index"></TabBars>
                </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	  separator: {
			height: 1,
			backgroundColor: '#ccc',
	  },
	  button:{
			backgroundColor: "#f6f6f6",
			marginTop:Dimensions.size["2"],
			borderTopWidth:1,
			borderTopColor:"#ddd",
			borderStyle:"solid"
	  },
	  buttonText:{
			color:"#555"
	  }
})

module.exports = UserIndexView;