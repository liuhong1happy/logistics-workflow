var React = require('react-native')
var {
    Text,
    View,
} = React;

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;

var ToolBar = require('../base/react-native-toolbar');
    
var router = require('../base/react-native-router');
var Link = router.Link;
    
var UserIndexView = React.createClass({
    render:function(){
        return (<ContentContainer>
                    <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="我" subtitle="当前状态：在线" actions={[{title:"更多"}]}></ToolBar>
                    <View>
                        <Text>
                            This is User Index Page!
                        </Text>
                    </View>
                    <TabBars name="/user/index"></TabBars>
                </ContentContainer>)
    }
})

module.exports = UserIndexView;