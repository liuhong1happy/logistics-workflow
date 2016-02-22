'use strict'
var React = require('react-native')
var {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var Utils = {
    from:"icomoon",
    glypy:{
          home: 'e900',
          user: 'e901',
          search: 'e902',
          send: 'e903',
    },
    glypyMapMaker:function(glypy){
        return Object.keys(glypy)
            .map(function(key){
            return {
                key:key,
                value: String.fromCharCode(parseInt(glypy[key], 16))
            }
            })
            .reduce(function(map,glypy){
                map[glypy.key] = glypy.value;
                return map;
            },{})
    },
}

var TabBar = React.createClass({
    render:function(){
        var { barColor } = this.props;
        return (<View style={[{backgroundColor:barColor},styles.tabbar]}>
                    {this.props.children}
                </View>)
    }
})

var Tab = React.createClass({
    getInitialState:function(){
        return {
            glypy: Utils.glypyMapMaker(Utils.glypy)
        }
    },
    onPress:function(e){
        var name = this.props.name;
        if(this.props.onPress){
            this.props.onPress(e,name);
        }
    },
    genIcon:function(){
        var { icon,selectedIcon,selected,systemIcon,defaultColor,selectedColor } = this.props;
        if(systemIcon){
            var glypy= this.state.glypy;
            var color = selected ?  selectedColor : defaultColor;
            return (<Text style={{"color":color,"fontFamily":Utils.from,"fontSize":20,textAlign:"center"}}>{glypy[systemIcon]}</Text>)
        } else {
            return (<Image source={selected? icon : selectedIcon}></Image>)
        }
    },
    render:function(){
        var { title } = this.props; 
        var icon = this.genIcon();
        return (<TouchableHighlight style={styles.tab} onPress={this.onPress}>
                        <View>
                            <View>
                                {icon}
                            </View>
                            <View style={styles.labelRow}>
                                <Text style={styles.label}>{title}</Text>
                            </View>
                        </View>
                </TouchableHighlight>)
    }
})
    
var styles = StyleSheet.create({
    tabbar:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        flexDirection:"row",
        justifyContent:"space-around",// 水平方向
        alignItems:"center",
        width:width
    },
    tab:{
        flex:1
    },
    labelRow:{
        marginTop:5
    },
    label:{
        fontSize:12,
        color:"#ddd",
        textAlign:"center"
    }
})

module.exports.TabBar = TabBar;
module.exports.Tab = Tab;