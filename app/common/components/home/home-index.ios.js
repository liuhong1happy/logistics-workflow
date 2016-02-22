var React = require('react-native')
var {
    Text,
    View,
    Navigator,
} = React;

var router = require('../base/react-native-router');
var Link = router.Link;

var TabBars = require('../base/tabbars');

var system = require('../base/system-container')
var {ContentContainer} = system;
    
var HomeIndexView = React.createClass({
    render:function(){
        return (<ContentContainer>
                        <View>
                            <Text>
                                This is Home Index Page!
                            </Text>
                        </View>
                        <Link style={{"backgroundColor":"red"}} name="/search/index" index={0} config={Navigator.SceneConfigs.FadeAndroid}>
                                <Text>To Search</Text>
                        </Link>
                        <TabBars name="/home/index"></TabBars>
                </ContentContainer>)
    }
})

module.exports = HomeIndexView;