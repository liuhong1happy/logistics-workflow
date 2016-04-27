'use strict'
var React = require('react');
var {
    Text,
    View,
	StyleSheet,
	TouchableOpacity,
	Picker,
	Navigator,
	Alert
} = require('react-native');

var TabBars = require('../base/tabbars');
var {ContentContainer} = require('../base/system-container')
var {History} = require('../base/react-native-router');
var ToolBar = require('../base/react-native-toolbar');
var {TextInput,Button} = require('../base/react-native-form')
var SystemStore = require('../../stores/system-store');
var Dimensions = require('../base/react-native-dimensions');
var {EventTypes} = require('../../constants/system-constants')
   
var WebAPIActions = require('../../actions/web-api-actions');

var SendCarryView = React.createClass({
	getInitialState:function(){
		return {
			form_data:{}
		}
	},
    componentDidMount:function(){
        SystemStore.addChangeListener(EventTypes.CHANGED_ADDRESS_FORM,this._handleAddressFormChange);
		SystemStore.addChangeListener(EventTypes.CHANGED_CATEGORY_FORM,this._handleCategoryFormChange);
		SystemStore.addChangeListener(EventTypes.CHANGED_DATE_PICKER_FORM,this._handleDatePickerFormChange);
		
		SystemStore.addChangeListener(EventTypes.POSTED_SEND_CARRY_FORM,this._postFormSuccess);
    },
    componentWillUnmount:function(){
        SystemStore.removeChangeListener(EventTypes.CHANGED_ADDRESS_FORM,this._handleAddressFormChange);
		SystemStore.removeChangeListener(EventTypes.CHANGED_CATEGORY_FORM,this._handleCategoryFormChange);
		SystemStore.removeChangeListener(EventTypes.CHANGED_DATE_PICKER_FORM,this._handleDatePickerFormChange);
		
		SystemStore.removeChangeListener(EventTypes.POSTED_SEND_CARRY_FORM,this._postFormSuccess);
    },
	_postFormSuccess:function(){
		Alert.alert("提示","新增承运信息成功",[{text: '确定', onPress: () => History.popRoute() }])
	},
	onNavIconPress:function(){
		History.popRoute();
	},
	handleChangeMobile:function(name,text){
		var form_data = this.state.form_data;
		form_data.mobile = text;
		this.setState({
			form_data:form_data
		})
	},
	handleChangeSource:function(){
		var form_data = this.state.form_data;
		var source = form_data.source?form_data.source:{};
		History.pushRoute("/form/msg?name=source&type=province&"+
						  "province="+(source.province?source.province.value:"")+
						  "&city="+(source.city?source.city.value:"")+"&back=send_carry_source",
				2,Navigator.SceneConfigs.PushFromRight)
	},
	handleChangeTarget:function(){
		var form_data = this.state.form_data;
		var target = form_data.target?form_data.target:{};
		History.pushRoute("/form/msg?name=target&type=province&"+
						  "province="+(target.province?target.province.value:"")+
						  "&city="+(target.city?target.city.value:"")+"&back=send_carry_target",
				2,Navigator.SceneConfigs.PushFromRight)
	},
	handleChangeTool:function(){
		var form_data = this.state.form_data;
		var tool = form_data.tool?form_data.tool:{};
		History.pushRoute("/form/select?name=tool&type=transport_tools&"+
						  "category="+(tool.value?tool.value:"")+"&back=send_carry_tool",
				2,Navigator.SceneConfigs.PushFromRight)
	},
	handleChangeFrequency:function(){
		var form_data = this.state.form_data;
		var frequency = form_data.frequency?form_data.frequency:{};
		History.pushRoute("/form/select?name=frequency&type=transport_frequency&"+
						  "category="+(frequency.value?frequency.value:"")+"&back=send_carry_frequency",
				2,Navigator.SceneConfigs.PushFromRight)
	},
	handleChangeDate:function(){
		var form_data = this.state.form_data;
		var date = form_data.date?form_data.date:{};
		History.pushRoute("/form/datepicker?name=date&type=date&date="+(date.value?date.value:"")+"&back=send_carry_date",
				2,Navigator.SceneConfigs.PushFromRight)
	},
    _handleAddressFormChange:function(){
        var data = SystemStore.getAddressForm();
        switch(data.back){
            case "send_carry_source":
            case "send_carry_target":
                var form_data = this.state.form_data;
                form_data[data.name] = {
                    province:data.province,
                    city:data.city
                }
                this.setState({
                    form_data:form_data
                });
                break;
        }
    },
	_handleCategoryFormChange:function(){
        var data = SystemStore.getCategoryForm();
        switch(data.back){
            case "send_carry_tool":
            case "send_carry_frequency":
                var form_data = this.state.form_data;
                form_data[data.name] = data.category;
                this.setState({
                    form_data:form_data
                });
                break;
        }
		
	},
	_handleDatePickerFormChange:function(){
        var data = SystemStore.getDatePickerForm();
        switch(data.back){
            case "send_carry_date":
                var form_data = this.state.form_data;
                form_data[data.name] = data.date;
                this.setState({
                    form_data:form_data
                });
                break;
        }
	},
	handleSubmit:function(e){
		var form_data = this.state.form_data;
		if(!form_data.mobile){
			Alert.alert("提示","请输入联系电话");
			return;
		}
		if(!form_data.source){
			Alert.alert("提示","请选择始发地");
			return;
		}
		if(!form_data.target){
			Alert.alert("提示","请选择目的地");
			return;
		}
		if(!form_data.tool){
			Alert.alert("提示","请选择承运工具");
			return;
		}
		if(!form_data.frequency){
			Alert.alert("提示","请选择承运频率");
			return;
		}
		if(!form_data.date){
			Alert.alert("提示","请选择具体时间");
			return;
		}
		var user_info = SystemStore.getUserInfo();
		form_data.user_name = user_info.user_name;
		form_data.form_name = "send_carry";
		form_data.form_key = new Date().valueOf();
		WebAPIActions.postSendCarryForm(form_data);
	},
    render:function(){
		var user_info = SystemStore.getUserInfo();
		var form_data = this.state.form_data;
		var source = form_data.source?form_data.source:{};
		var target = form_data.target?form_data.target:{};
		var tool = form_data.tool?form_data.tool:{};
		var frequency = form_data.frequency?form_data.frequency:{};
		var date = form_data.date?form_data.date:{};
		
		var source_address = (source.province?source.province.text:"")+" "+(source.city?source.city.text:"");
		var target_address = (target.province?target.province.text:"")+" "+(target.city?target.city.text:"");
		 
		var handleSubmit = this.handleSubmit;
        return (
        <ContentContainer>
            <ToolBar navIcon={{title:"返回"}} logo={{}} title="新增承运信息" subtitle="" actions={[]} onNavIconPress={this.onNavIconPress}></ToolBar>
            <View style={styles.container}>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>承运人</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={[styles.formInput,styles.disabled]}  value={user_info.user_name} editable={false} textAlign="left"></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>联系电话</Text>
					</View>
					<View style={styles.formControl}>
						<TextInput style={styles.formInput}  value={form_data.mobile}  textAlign="left" placeholder="请输入联系电话" onChangeText={this.handleChangeMobile}></TextInput>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow} onPress={this.handleChangeSource}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>始发地</Text>
					</View>
					<View style={styles.formControl}>
						<Text style={styles.formText}>{source_address}</Text>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow} onPress={this.handleChangeTarget}>
					<View style={styles.formLabel}>
						<Text style={styles.formText} >目的地</Text>
					</View>
					<View style={styles.formControl}>
						<Text style={styles.formText} >{target_address}</Text>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow} onPress={this.handleChangeTool}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>承运工具</Text>
					</View>
					<View style={styles.formControl}>
						<Text style={styles.formText} >{tool.text}</Text>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow} onPress={this.handleChangeFrequency}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>承运频率</Text>
					</View>
					<View style={styles.formControl}>
						<Text style={styles.formText} >{frequency.text}</Text>
					</View>
				</TouchableOpacity>
                <TouchableOpacity style={styles.formRow} onPress={this.handleChangeDate}>
					<View style={styles.formLabel}>
						<Text style={styles.formText}>具体时间</Text>
					</View>
					<View style={styles.formControl}>
						<Text style={styles.formText} >{date.text}</Text>
					</View>
				</TouchableOpacity>
				<Button style={styles.button} title="发布"  textAlign="center" onPress={handleSubmit}></Button>
            </View>
        </ContentContainer>)
    }
})

var styles = StyleSheet.create({
	  container:{
		  marginTop:Dimensions.size["2"]
	  },
	  formRow:{
          height:Dimensions.size["16"],
          width:Dimensions.screenWidth,
		  flexDirection:"row",
		  alignItems:"center",
		  justifyContent:"center",
		  borderBottomWidth:1,
		  borderStyle:"solid",
		  borderColor:"#dbdbdb",
		  paddingHorizontal:Dimensions.size["6"],
		  backgroundColor:"#fff"
	  },
	  formLabel:{
		  flex:2,
		  height:Dimensions.size["16"],
		  flexDirection:"row",
		  alignItems:"center",
		  justifyContent:"flex-start"
	  },
	  formControl:{
		  flex:5
	  },
	  formInput:{
		  fontSize:Dimensions.size["6"],
		  height:Dimensions.size["16"],
		  color:"#666"
	  },
	  formText:{
		  fontSize:Dimensions.size["6"],
		  lineHeight:Dimensions.size["8"],
		  color:"#666"
	  },
	  disabled:{
		  color:"#dbdbdb"
	  },
	  button:{
		  width:Dimensions.screenWidth,
		  backgroundColor:"#3399ff",
		  height:Dimensions.size["16"],
		  marginTop:Dimensions.size["6"]
	  }
})

module.exports = SendCarryView;