'use strict'
var React = require('react');
var {
    View,
    Text,
    Switch,
    Picker,
    TextInput,
    TouchableOpacity,
    StyleSheet
} = require('react-native');

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
            return (<Image source={this.props.icon} width={24} height={24} />)
        }else{
            return (<Text></Text>)
        }
    },
    render:function(){
        var img = this.genImage();
        return (<TouchableOpacity onPress={this.onPress} style={ [styles.button,this.props.style ]}>
                        {img}
                        <Text style={{color:"#fff",fontSize:12}}>{this.props.title}</Text>
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