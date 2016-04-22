'use strict'
var React = require('react-native');

var {
    View,
    Text,
    Switch,
    Picker,
    TextInput,
    TouchableOpacity,
    StyleSheet
} = React;

var Dimensions = require('./react-native-dimensions');

// props
// {name:xxx,icon:xxx,title:xxx,width:120,style:{},onPress:function(){} }
var Button = React.createClass({
    onPress:function(e){
        if(this.props.onPress){
            this.props.onPress(e,this.props.name);
        }
    },
    genImage:function(){
        if(this.props.icon){
            return (<Image source={this.props.icon} width={Dimensions.size["12"]} height={Dimensions.size["12"]} />)
        }else{
            return (<Text></Text>)
        }
    },
    render:function(){
        var img = this.genImage();
        return (<TouchableOpacity onPress={this.onPress} style={ [styles.button,this.props.style ]}>
                        {img}
                        <Text style={{color:"#fff", fontSize: Dimensions.size["6"]}}>{this.props.title}</Text>
                </TouchableOpacity>)
    }
})
// like TextInput       
var TextArea = React.createClass({
    render:function(){
        var {multiline,...props} = this.props;
        return (<TextInput multiline={true} {..props}></TextInput>)
    }
})

// DatePicker
// DateTimePicker
// CheckBox / CheckGroup
// RadioBox / RadioGroup

styles = StyleSheet.create({
    button:{
        backgroundColor:"#3399ff",
        color:"#fff"
    }
})

module.exports.Button = Button;
module.exports.TextInput = TextInput;
module.exports.TextArea = TextArea;
module.exports.Picker = Picker;
module.exports.Switch = Switch;