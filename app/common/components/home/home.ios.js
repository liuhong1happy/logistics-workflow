var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  Dimensions
} = React;

var system = require('../base/system-container')
var {SystemContainer} = system;

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