var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;
var SystemContainer = require('./base/system-container')
var TabBars = require('./base/tabbars')

var HomeView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"home"});
    },
    render() {
        return (
            <SystemContainer>
                <Text onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
                <TabBars></TabBars>
            </SystemContainer>  
        )
    }
});

module.exports = HomeView;