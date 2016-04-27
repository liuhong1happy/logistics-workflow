'use strict'
var React = require('react');
var {
    Text,
    View,
    Navigator,
    Picker,
    TextInput,
    ScrollView,
    ListView,
    StyleSheet,
    TouchableHighlight
} = require('react-native')
var Dimensions = require('../base/react-native-dimensions');
var {Link,History} = require('../base/react-native-router');
var TabBars = require('../base/tabbars');
var {ContentContainer} = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');
var SystemStore = require('../../stores/system-store');
var {EventTypes} = require('../../constants/system-constants');

var logistics = require('../../images/logistics.png');

var HomeIndexView = React.createClass({
    getInitialState:function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            mySendInfoList:ds.cloneWithRows(SystemStore.getMySendInfo()),
            messageList:ds.cloneWithRows(SystemStore.getMyMessage())
        }
    },
    componentDidMount:function(){
        SystemStore.addChangeListener(EventTypes.RECEIVED_MY_SEND_INFO,this._onChange);
        SystemStore.addChangeListener(EventTypes.RECEIVED_MY_MESSAGE,this._onChange);
    },
    componentWillUnmount:function(){
        SystemStore.removeChangeListener(EventTypes.RECEIVED_MY_SEND_INFO,this._onChange);
        SystemStore.removeChangeListener(EventTypes.RECEIVED_MY_MESSAGE,this._onChange);
    },
    _onChange:function(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            mySendInfoList:ds.cloneWithRows(SystemStore.getMySendInfo()),
            messageList:ds.cloneWithRows(SystemStore.getMyMessage())
        })
    },
    _pressRow:function(rowData){
        History.pushRoute("/home/my?form_key="+rowData.form_key,1,Navigator.SceneConfigs.PushFromRight);
    },
    _renderMySendInfoRow:function(rowData, sectionID, rowID){
		var title = "";
		switch(rowData.form_name){
			case "send_ship":
				title = "我有货物要托运，从"+rowData.source.city.text+"到"+rowData.target.city.text+"，联系方式："+rowData.mobile;
				break;
			case "send_carry":
				title = "我可以承运从"+rowData.source.city.text+"到"+rowData.target.city.text+"的货物，联系方式："+rowData.mobile;
				break;
		}
        
        return (
          <TouchableHighlight onPress={() => this._pressRow(rowData)}>
            <View>
              <View style={styles.row}>
                <Text style={styles.text}>
                 {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        );
    },
    _renderMyMessageRow:function(rowData, sectionID, rowID){
        var title = rowData.subtitle;
        return (
          <TouchableHighlight onPress={() => this._pressRow(rowID)}>
            <View>
              <View style={styles.row}>
                <Text style={styles.text}>
                   {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        );
    },
	onActionPress:function(e,name){
		History.pushRoute("/"+name+"/index")
	},
    render:function(){
        
        
        return (<ContentContainer>
                        <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="首页" subtitle="当前状态：在线" onActionPress={this.onActionPress}
							actions={[{title:"搜索",name:"search"},{title:"添加",name:"send"}]}></ToolBar>
                        <ScrollView>
                                <View style={styles.listTitle}><Text>我发布的信息</Text></View>
                                <ListView 
								enableEmptySections={true}
                                dataSource={this.state.mySendInfoList}
                                renderRow={this._renderMySendInfoRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
/>
                                <View style={styles.listTitle}><Text>我的消息</Text></View>
                                <ListView 
								enableEmptySections={true}
                                dataSource={this.state.messageList}
                                renderRow={this._renderMyMessageRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
/>
                        </ScrollView>              
                        <TabBars name="/home/index"></TabBars>
                </ContentContainer>)
    }
})


var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Dimensions.size["4"],
    backgroundColor: '#F6F6F6'
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  thumb: {
    width: Dimensions.size["32"],
    height: Dimensions.size["32"],
  },
  text: {
    flex: 1
  },
  listTitle:{
    height:Dimensions.size["16"],
    padding:Dimensions.size["4"],
    backgroundColor:"#eee",
    marginTop:Dimensions.size["2"],
    borderTopWidth:1,
    borderTopColor:"#ddd",
    borderStyle:"solid"
  }
});

module.exports = HomeIndexView;