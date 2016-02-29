var React = require('react-native')
var {
    Text,
    View,
    Navigator,
    Picker,
    TextInput,
    ScrollView,
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    TouchableHighlight
} = React;

var router = require('../base/react-native-router');
var Link = router.Link;

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;

var ToolBar = require('../base/react-native-toolbar');

var SystemStore = require('../../stores/system-store');
var SystemConstants = require('../../constants/system-constants');
var EventTypes = SystemConstants.EventTypes;


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
    _pressRow:function(){
        
    },
    _renderMySendInfoRow:function(rowData, sectionID, rowID){
        var title = rowData.source+"到"+rowData.target+"，联系方式："+rowData.mobile;
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
    render:function(){
        
        
        return (<ContentContainer>
                        <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="首页" subtitle="当前状态：在线" actions={[{title:"搜索"},{title:"添加"}]}></ToolBar>
                        <ScrollView>
                                <View style={styles.listTitle}><Text>我发布的信息</Text></View>
                                <ListView 
                                dataSource={this.state.mySendInfoList}
                                renderRow={this._renderMySendInfoRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}></ListView>
                                <View style={styles.listTitle}><Text>我的消息</Text></View>
                                <ListView 
                                dataSource={this.state.messageList}
                                renderRow={this._renderMyMessageRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
                                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}></ListView>
                        </ScrollView>              
                        <TabBars name="/home/index"></TabBars>
                </ContentContainer>)
    }
})


var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  listTitle:{
    height:30,
    padding:10,
    backgroundColor:"#eee",
    marginTop:5,
    borderTopWidth:1,
    borderTopColor:"#ddd",
    borderStyle:"solid"
  }
});

module.exports = HomeIndexView;