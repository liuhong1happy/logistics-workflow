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
var { Button } = require('../base/react-native-form');
var Dimensions = require('../base/react-native-dimensions')
var WebAPIActions = require('../../actions/web-api-actions')

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
				History.pushRoute("/user/login");
				WebAPIActions.userLogout({});
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
                                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
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