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
    
var SearchIndexView = React.createClass({
    render:function(){
        return (
        <ContentContainer>
            <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="搜索" subtitle="当前状态：在线" actions={[{title:"更多"}]}></ToolBar>
            <View>
                <Text>
                    This is Search Index Page!
                </Text>
            </View>
            <TabBars name="/search/index"></TabBars>
        </ContentContainer>)
    }
})

module.exports = SearchIndexView;