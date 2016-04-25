var React = require('react');
var { ListView,StyleSheet,ScrollView,View,Text,TouchableHighlight,TouchableOpacity } = require('react-native');

var {SystemContainer,ContentContainer} = require('../base/system-container')
var {History} = require('../base/react-native-router');
var ToolBar = require('../base/react-native-toolbar');
var Dimensions = require('../base/react-native-dimensions');
var SystemStore = require('../../stores/system-store');

var FormAddress = React.createClass({
    _pressRow:function(){
        
    },
    _renderProvincesRow:function(rowData, sectionID, rowID){
        var title = rowData.text;
        return (
          <TouchableHighlight onPress={() => this._pressRow(rowID)}>
            <View>
              <View style={styles.row}>
                <Text style={styles.text}>
                 {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        );
    },
    _renderCitiesRow:function(rowData, sectionID, rowID){
        var title = rowData.text;
        return (
          <TouchableHighlight onPress={() => this._pressRow(rowID)}>
            <View>
              <View style={styles.row}>
                <Text style={styles.text}>
                   {title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        );
    },
	render:function(){
		var {province,city,type,back} = this.props;
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var  provinces = SystemStore.getProvinces();
		var cities = SystemStore.getCities(this.props.provinces);
		var sourceData = ds.cloneWithRows(type=="province" ? provinces : cities);
		var renderRow = type=="province" ? this._renderProvincesRow : this._renderCitiesRow;
		var address = (province?province.text:"")+" "+(city?city.text:"")
        return (<SystemContainer>
			<ContentContainer>
                        <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="选择城市" subtitle="" actions={[]}></ToolBar>
                        <ScrollView>
                                <View style={[styles.listTitle,styles.tab]}><Text style={styles.tabTitle}>当前位置</Text></View>
								<TouchableOpacity style={styles.listTitle}>
									<Text>{ address }</Text>
								</TouchableOpacity>																							   		
                                <View style={[styles.listTitle,styles.tab]}><Text style={styles.tabTitle}>全部地区</Text></View>
								<TouchableOpacity style={[styles.listTitle,styles.twoTitle]}>
										<Text style={styles.leftTitle}>{ type=="province"?province.text : city.text}</Text>
										<Text style={styles.rightTitle}>已选地区</Text>
								</TouchableOpacity>
                                <ListView 
								enableEmptySections={true}
                                dataSource={sourceData}
                                renderRow={renderRow}
                                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />} 
								></ListView>
                        </ScrollView>              
                </ContentContainer>
			</SystemContainer>)
	}
})


var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: Dimensions.size["4"],
    backgroundColor: '#F6F6F6'
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  thumb: {
    width: Dimensions.size["32"],
    height: Dimensions.size["32"],
  },
  text: {
    flex: 1
  },
  listTitle:{
    height:Dimensions.size["16"],
    padding:Dimensions.size["4"],
    backgroundColor:"#F6F6F6",
    marginTop:Dimensions.size["2"],
    borderTopWidth:1,
    borderTopColor:"#ddd",
    borderStyle:"solid"
  },
  tab:{
	backgroundColor:"transparent",
	height:Dimensions.size["6"],
  },
  tabTitle:{
	fontSize:Dimensions.size["4"],
	color:"#999"
  },
  twoTitle:{
    flexDirection: 'row',
    justifyContent: 'center',
	backgroundColor: '#F6F6F6',
	marginBottom:Dimensions.size["4"],
  },
  leftTitle:{
	flex:1,
	textAlign:"left"
  },
  rightTitle:{
	flex:1,
	textAlign:"right",
	color:"#999",
	fontSize:Dimensions.size["4"],
  }
});

module.exports = FormAddress;