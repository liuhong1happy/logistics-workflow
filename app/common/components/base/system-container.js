'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Platform,
  Dimensions
} = React;
    
var {height, width} = Dimensions.get('window');
var isIOS = Platform.OS === 'ios';

console.log(isIOS);
    
var SystemContainer = React.createClass({
    render:function(){
        return (<View>
                        {this.props.children}
                </View>)
    }
})
        
var styles = {
    container:{
        marginTop:isIOS?20:0,
        height:isIOS?height-20:height,
        width:width
    }
}

module.exports = SystemContainer;