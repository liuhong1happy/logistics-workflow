'use strict'
var React = require('react');
var {
    ListView,
    View,
	RecyclerViewBackedScrollView,
	StyleSheet,
    Alert
} = require('react-native');
var TabBars = require('../base/tabbars');
var {ContentContainer}  = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');
var { Link,History } = require('../base/react-native-router');
var { Button,TextInput } = require('../base/react-native-form');
var Dimensions = require('../base/react-native-dimensions');

var WebAPIActions = require('../../actions/web-api-actions');
var SystemStore = require('../../stores/system-store');
var {EventTypes} = require('../../constants/system-constants');

var UserLoginView = React.createClass({
    getInitialState:function(){
        return {
            form_data:{}
        }
    },
    componentDidMount:function(){
        SystemStore.addChangeListener(EventTypes.POSTED_USER_LOGIN_FORM,this.handleUserLoginSuccess);
    },
    componentWillUnmount:function(){
         SystemStore.removeChangeListener(EventTypes.POSTED_USER_LOGIN_FORM,this.handleUserLoginSuccess);
    },
    handleTextChange:function(name,text){
        var form_data = this.state.form_data;
        form_data[name] = text;
        this.setState({
            form_data:form_data
        })
    },
    handleUserLogin:function(){
        var form_data = this.state.form_data;
        // 校验表单
        if(!form_data.user_name){
            Alert.alert("提示","请输入用户名");
            return;
        }
        if(!form_data.user_pwd){
            Alert.alert("提示","请输入密码");
            return;
        }
        if(form_data.user_name!="admin" || form_data.user_pwd!="123456"){
            Alert.alert("提示","你输入的用户名或密码错误");
            return;
        }
        WebAPIActions.userLogin(form_data);
    },
    handleUserLoginSuccess:function(){
        Alert.alert("提示","登录成功",[{text: '确定', onPress: () => History.resetToRoute("/home/index") }]);
    },
    render:function(){
        var form_data = this.state.form_data;
        return (<ContentContainer style={styles.container}>
                    <ToolBar navIcon={{}} logo={{}} title="登录" subtitle="用户登录页面" actions={[]}></ToolBar>
                    <View style={styles.form}>
                            <View style={styles.logoView}>
                            </View>
							<View style={styles.inputView}>
								<TextInput name="user_name" placeholder="请输入用户名" style={styles.input} value={form_data.user_name} onChangeText={this.handleTextChange}></TextInput> 
							</View>
							<View style={styles.inputView}>
								<TextInput name="user_pwd" placeholder="请输入密码" style={styles.input} secureTextEntry={true} value={form_data.user_pwd}  onChangeText={this.handleTextChange} maxLength={16}></TextInput> 
							</View>
							<Button title="登陆" style={styles.button} textAlign="center" onPress={this.handleUserLogin}></Button>
					</View>			  	
                </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	  form: {
			flexDirection: "column",
			justifyContent: 'center',
		  	width:Dimensions.screenWidth,
		  	height:Dimensions.screenHeight,
		    alignItems:"center",
		    marginTop:-Dimensions.size["24"]
	  },
      logoView:{
        height:Dimensions.size["24"],
        width:Dimensions.size["24"],
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#dbdbdb"
      },
	  inputView:{
          height:Dimensions.size["16"],
          width:Dimensions.screenWidth-Dimensions.size["6"],
	  },
	  input:{
		  height:Dimensions.size["16"],
		  width:Dimensions.screenWidth-Dimensions.size["6"],
		  fontSize:Dimensions.size["6"]
	  },
	  button:{
		  width:Dimensions.size["64"],
		  height:Dimensions.size["12"],
		  backgroundColor:"#3399ff",
		  borderBottomLeftRadius:Dimensions.size["2"],
		  borderBottomRightRadius:Dimensions.size["2"],
		  borderTopLeftRadius:Dimensions.size["2"],
		  borderTopRightRadius:Dimensions.size["2"],
		  marginTop:Dimensions.size["6"]
	  },
	  container:{
		backgroundColor:"#f0f0f0"
	}
})

module.exports = UserLoginView;