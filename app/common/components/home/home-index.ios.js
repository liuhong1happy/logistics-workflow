var React = require('react-native')
var {
    Text,
    View,
    Navigator,
    Picker,
    TextInput
} = React;

var router = require('../base/react-native-router');
var Link = router.Link;

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;

var ToolBar = require('../base/react-native-toolbar');
    
var HomeIndexView = React.createClass({
    getInitialState:function(){
        return {
            language:""
        }
    },
    render:function(){
        return (<ContentContainer>
                        <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="首页" subtitle="当前状态：在线" actions={[{title:"更多"}]}></ToolBar>
                        <View>
                            <Text>
                                This is Home Index Page!
                            </Text>
                        </View>
                        <Link style={{"backgroundColor":"red"}} name="/search/index" index={0} config={Navigator.SceneConfigs.FadeAndroid}>
                                <Text>To Search</Text>
                        </Link>
                        <Picker selectedValue={this.state.language} onValueChange={(lang) => this.setState({language: lang})}>
                              <Picker.Item label="请选择你熟悉的编程语言" value="" />
                              <Picker.Item label="Java" value="java" />
                              <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                        <TextInput keyboardType="email-address" style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
                        <TextInput keyboardType="email-address" style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(title) => this.setState({title})} value={this.state.title} />
                        <TabBars name="/home/index"></TabBars>
                </ContentContainer>)
    }
})

module.exports = HomeIndexView;