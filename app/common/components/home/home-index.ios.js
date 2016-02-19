var React = require('react-native')
var {
    Text,
    View
} = React;

var router = require('../base/react-native-router');
var History = router.History;
    
var HomeIndexView = React.createClass({
    toSearchIndex:function(){
        History.pushRoute("/search/index")
    },
    render:function(){
        return (<View>
                <View>
                    <Text>
                        This is Home Index Page!
                    </Text>
                </View>
                <View style={{"backgroundColor":"red"}}>
                        <Text onPress={this.toSearchIndex}>To Search</Text>
                </View>
                </View>)
    }
})

module.exports = HomeIndexView;