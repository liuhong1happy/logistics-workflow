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
    
var SendIndexView = React.createClass({
    render:function(){
        return (<ContentContainer>
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