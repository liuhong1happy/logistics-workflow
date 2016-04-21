var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;
var system = require('../base/system-container');
var {SystemContainer} = system;

var SearchView = React.createClass({
    render() {
        return (
            <SystemContainer>
                {this.props.children}
            </SystemContainer>  
        )
    }
});

module.exports = SearchView;
