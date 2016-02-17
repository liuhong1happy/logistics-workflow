var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;
var SystemContainer = require('./base/system-container')
var UserView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"home"});
    },
    render() {
        return (
            <SystemContainer>
                <Text onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </SystemContainer>  
        )
    }
});

module.exports = UserView;