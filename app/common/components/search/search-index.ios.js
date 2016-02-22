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

var SearchIndexView = React.createClass({
    render:function(){
        return (
        <ContentContainer>
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