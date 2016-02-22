var React = require('react-native')
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = React;
var SystemContainer = require('../base/system-container');

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
