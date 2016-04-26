'use strict';
var LocalStorageManager = require('./local-storage-manager');

var data = {
    user_info:{},
    my_send_info:[],
    my_message:[],
	provinces:[
		{text:"四川",value:"sichuan",cities:[
			{text:"阿坝",value:"aba"},
			{text:"巴中",value:"bazhong"},
			{text:"德阳",value:"deyang"},
			{text:"成都",value:"chengdu"},
			{text:"达州",value:"dazhou"},
			{text:"广安",value:"guangan"},
			{text:"广元",value:"guangyuan"},
			{text:"甘孜",value:"ganzi"},
			{text:"乐山",value:"leshan"},
			{text:"凉山",value:"liangshan"},
			{text:"泸州",value:"luzhou"},
			{text:"眉山",value:"meishan"},
			{text:"绵阳",value:"mianyang"},
			{text:"南充",value:"nanchong"},
			{text:"内江",value:"neijiang"},
			{text:"攀枝花",value:"panzhihua"},
			{text:"遂宁",value:"suining"},
			{text:"宜宾",value:"yibin"},
			{text:"自贡",value:"zigong"},
			{text:"资阳",value:"ziyang"},
		]},
		{text:"重庆",value:"chongqing",cities:[
			{text:"北碚",value:"beibei"},
			{text:"巴南",value:"banan"},
			{text:"璧山",value:"bishan"},
			{text:"城口",value:"chengkou"},
			{text:"长寿",value:"changshou"},
			{text:"大渡口",value:"dadukou"},
			{text:"垫江",value:"dianjiang"},
			{text:"大足",value:"dazhu"},
			{text:"丰都",value:"fengdu"},
			{text:"奉节",value:"fengjie"},
			{text:"涪陵",value:"fuling"},
			{text:"合川",value:"hechuan"},
			{text:"江北",value:"jiangbei"},
			{text:"江津",value:"jiangjin"},
			{text:"九龙坡",value:"jiulongpo"},
			{text:"开县",value:"kaixian"},
			{text:"两江新区",value:"liangjiang"},
			{text:"梁平",value:"liangping"},
			{text:"南岸",value:"nanan"},
			{text:"彭水",value:"pengshui"},
			{text:"綦江",value:"qijiang"},
			{text:"黔江",value:"qianjiang"},
			{text:"荣昌",value:"songchang"},
			{text:"沙坪坝",value:"shapingba"},
			{text:"双桥",value:"shuangqiao"},
			{text:"石柱",value:"shizhu"},
			{text:"铜梁",value:"tongliang"},
			{text:"潼南",value:"tongnan"},
			{text:"武隆",value:"wulong"},
			{text:"巫山",value:"wushan"},
			{text:"万盛",value:"wansheng"},
			{text:"巫溪",value:"wuxi"},
			{text:"万州",value:"wanzhou"},
			{text:"秀山",value:"xiushan"},
			{text:"渝北",value:"yubei"},
			{text:"永川",value:"yongchuan"},
			{text:"酉阳",value:"youyang"},
			{text:"云阳",value:"yunyang"},
			{text:"渝中",value:"yuzhong"},
			{text:"忠县",value:"zhongxian"},
		]}
	],
	category:{
		article_types:[
			{text: "日用百货" ,value: "1"},
			{text: "3C电子产品" ,value: "2"},
			{text: "家具家电" ,value: "3"},
			{text: "图书音像" ,value: "4"},
			{text: "糖酒食品" ,value: "5"},
			{text: "服装" ,value: "6"},
			{text: "营养保健" ,value: "7"},
			{text: "机械零部件" ,value: "8"},
			{text: "建筑装饰" ,value: "9"}
		],
		transport_tools:[
			{text: "货车" ,value: "1"},
			{text: "火车" ,value: "2"},
			{text: "飞机" ,value: "3"},
			{text: "货轮" ,value: "4"},
			{text: "其它" ,value: "4"},
		],
		transport_frequency:[
			{text: "单次" ,value: "1"},
			{text: "每天" ,value: "2"},
			{text: "间隔N天" ,value: "3"},
			{text: "每周" ,value: "4"},
			{text: "每个月" ,value: "5"}
		],
		search_keys:[
			{text:"始发地",value:"source"},
			{text:"目的地",value:"target"},
			{text:"频率",value:"frequency"},
			{text:"工具",value:"tool"}
		]
	}
}



var manager = new LocalStorageManager();
module.exports = {
    setData:function(type,details){
		if(type) data[type] = details;
        manager.setData(data,function(error){
            console.log(error);
        });
    },
    getData:function(callback){
        manager.getData(function(error,result){
            callback(error,result)
        });
    }
}