'use strict';
var LocalStorageManager = require('./local-storage-manager');

var data = {
    user_info:{},
    my_send_info:[
        {
            source:"成都",
            target:"上海",
            mobile:"13366668888",
            details:{}
        }
    ],
    my_message:[
        {
            type:"send-info",
            title:"发布承运信息",
            subtitle:"发布成都到上海的承运信息，时间2016年4月1日上午9点出发，预计4月2日下午5点到上海。",
            details:{}
        }
    ],
	provinces:[
		{text:"四川",value:"sichuan",cities:[
			{text:"阿坝",value:"aba"},
			{text:"巴中",value:"bazhong"},
			{text:"德阳",value:"deyang"},
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
	]
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