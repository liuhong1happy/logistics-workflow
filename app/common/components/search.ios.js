var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;
var SystemContainer = require('./base/system-container')
var SearchView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"home"});
    },
    render() {
        return (
            <SystemContainer>
                <Text >
                    This is Search Page!
                </Text>
            </SystemContainer>  
        )
    }
});

module.exports = SearchView;
