var React = require('react-native')
var {
    Text,
    View,
} = React;

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;

var router = require('../base/react-native-router');
var Link = router.Link;

var ToolBar = require('../base/react-native-toolbar');
    
var SendIndexView = React.createClass({
    render:function(){
        return (<ContentContainer>
                    <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="发布" subtitle="当前状态：在线" actions={[{title:"更多"}]}></ToolBar>
                    <View>
                        <Text>
                            This is Send Index Page!
                        </Text>
                    </View>
                    <TabBars name="/send/index"></TabBars>
                </ContentContainer>)
    }
})

module.exports = SendIndexView;