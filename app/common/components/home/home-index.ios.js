var React = require('react-native')
var {
    Text,
    View,
    Navigator
} = React;

var router = require('../base/react-native-router');
var History = router.History;
var Link = router.Link;
    
var HomeIndexView = React.createClass({
    render:function(){
        return (<View>
                <View>
                    <Text>
                        This is Home Index Page!
                    </Text>
                </View>
                <Link style={{"backgroundColor":"red"}} name="/search/index" index={0} config={Navigator.SceneConfigs.FadeAndroid}>
                        <Text>To Search</Text>
                </Link>
                </View>)
    }
})

module.exports = HomeIndexView;