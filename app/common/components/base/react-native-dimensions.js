var {Dimensions} = require('react-native');

var {width,scale,height} = Dimensions.get("window");

module.exports = {
	get:Dimensions.get,
	screenWidth:width,
	screenHeight:height,
	screenScale:scale,
	width:width,
	height:height,
	scale:scale,
	
	getFontSize:function(size){
		return size*scale;// 4 6 8 12 16 24 32 48 64
	},
	getWidth:function(width){
		return width*scale;
	},
	getHeight:function(height){
		return height*scale;
	},
	size:{
		"2":2*scale,
		"4":4*scale,
		"6":6*scale,
		"8":8*scale,
		"12":12*scale,
		"16":16*scale,
		"24":24*scale,
		"32":32*scale,
		"48":48*scale,
		"64":64*scale,
	}
}