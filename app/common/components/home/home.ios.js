var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;

var SystemContainer = require('../base/system-container')

var HomeView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"home"});
    },
    render() {
        return (
            <SystemContainer>
                {this.props.children}
            </SystemContainer>  
        )
    }
});

module.exports = HomeView;