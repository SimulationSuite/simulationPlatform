import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
	state: {
  	
  	socketUrl:'ws://192.168.1.167:8080/webSocket/',

  	 //节点未开始提示
  	node_noStart:'您还未拖动节点',
  	//节点未启动状态的提示
  	node_noFinsh:'还未启动完成，请稍后再试！',
  	//节点启动7s的每秒状态
    node_sta1:'节点正在启动中',
    node_sta2:'校验创世区块完成',
    node_sta3:'生成创世区块完成',
    node_sta4:'P2P网络初始化完成',
    node_sta5:'内置合约初始化完成',
    node_sta6:'RPC接口初始化完成',
    node_sta7:'节点启动成功',
    //节点7s启动完成显示状态 
    node_sta8:'节点状态正常',   
    //节点刚开始启动的提示步骤
    node_start:'节点启动中，等四个节点都启动完成，请按右侧步骤提示进行下一步操作。',
    //四个节点启动完成的提示
    node_finsh:'当前节点已全部启动完成，请按右侧进行下一步操作。',
    
    node_stepTips: [ //节点步骤提示
				 {
				 	  step: 1,
						infolist: ['1、点击左侧工具箱，拖动节点至中央操作台。', 
						'2、点击节点，可查看当前节点的具体参数信息。', 
						'3、继续点击工具箱、拖动节点，直至4个节点全部安放完成。']
					},
					{
						step: 2,
						infolist: ['1、点击左侧工具箱的出块按钮，进行节点的出块操作。',
						'2、等待各节点进行难度计算，胜出的一方节点将获得出块资格。', 
						'3、出块后，点击新区块（区块1）可查看相关参数信息。']
					},
					{
						step: 3,
						infolist: ['1、点击左侧工具箱的广播按钮，进行节点的广播操作。',
						'2、等待获胜节点将新区块打包，并广播至其他各个节点。',
						'3、点击被广播的任一区块，可查看具体参数，与获胜节点1进行对比，查看信息是否一致，有无在广播过程中被篡改。'
						]
					},
					{
						step: 4,
						infolist: ['1、节点模拟运行已结束',
						'2、用户可点击右上角的重置进行重新操作，或返回主界面选择其他篇章。'
						]
					}
					
		],
		
		//多人发币步骤提示
		sm_multiple_stepTips:[
		   {step:1,infolist:[
		   	'1、当前在线人数没有达到4人，可点击左侧工具内的添加机器人，添加在线人数。',
		    '2、点击用户，可查看当前用户的具体参数信息。']
		   },
		   {step:2,infolist:['1.提示用户点击左侧工具 内的设置按钮进行币种的 设置操作。','2.提示用户待设置币种完 成后，点击设置用户，到 底部状态栏进行查看该用 户新币种的一些信息。']},
		  {step:3,
		  	infolist:['1.提示用户拖动左侧工具内的部署按钮进行合约的部署操作。',
		  	'2.等待合约的部署。',
		  	'3.合约部署完毕之后查看下方状态栏关于合约的具体参数']
		  },
		  {step:4,
		  	infolist:['1.请点击初期拥有者用户下方的转账按钮进行转账操作。',
		  	'2.点击转账目标用户，查看下方状态栏转账过后的参数信息。']
		  }
		],
		
		//发币步骤提示
		sm_stepTips:
		[//步骤提示
		  {step:1,infolist:['1、点击左侧工具箱，拖动用户至中央操作台。','2、点击用户，可查看当前用户的具体参数信息。','3、继续点击工具箱、拖动节点，直至4个用户全部安放完成。']},
		  {step:2,infolist:['1.提示用户点击左侧工具 内的设置按钮进行币种的 设置操作。','2.提示用户待设置币种完 成后，点击设置用户，到 底部状态栏进行查看该用 户新币种的一些信息。']},
		  {step:3,
		  	infolist:['1.提示用户拖动左侧工具内的部署按钮进行合约的部署操作。',
		  	'2.等待合约的部署。',
		  	'3.合约部署完毕之后查看下方状态栏关于合约的具体参数']
		  },
		  {step:4,
		  	infolist:['1.请点击初期拥有者用户下方的转账按钮进行转账操作。',
		  	'2.点击转账目标用户，查看下方状态栏转账过后的参数信息。']
		  }
		],
		
		hash_stepTips:
		[//步骤提示
		  {step:0,infolist:
	  	  ['1、点击左侧工具箱内“生成哈希”按钮，通过哈希计算为“文件A”生成哈希值。',
	  	    '2.点击“文件A”可查看生成完毕的哈希值。',
	  	  ]
		  },
		  {step:1,infolist:
	  	  ['1、点击左侧工具箱内“生成哈希”按钮，通过哈希计算为“文件A”生成哈希值。',
	  	    '2.点击“文件A”可查看生成完毕的哈希值。',
	  	  ]
		  },
		  {step:2,infolist:
	  	  ['1.点击左侧工具箱内“发送”按钮，在新弹出的框内选择“攻击”或“不攻击”。',
	  	    '2.点击“文件A”可查看生成完毕的哈希值。',
	  	  ]
		  },
		  {step:31,infolist:
	  	  ['1.在“用户B”接收到文件之后，点击“校验”按钮，对文件进行校验操作。',
	  	    '2.分别点击“文件A”与“文件B”对比查看哈希值。',
	  	  ]
		  },
		  {step:32,infolist:
	  	  ['1.哈希算法模拟已结束',
	  	   '2、用户可点击右上角的重置进行重新操作，或返回主界面选择其他篇章。'
	  	  ]
		  },
		  {step:33,infolist:
	  	  ['1.在“用户B”接受到文件之后，点击“校验”按钮，对文件进行校验操作。',
	  	    '2.分别点击“文件A”与“文件A”对比查看哈希值。',
	  	   
	  	  ]
		  },
		  {step:34,infolist:
	  	  ['1.哈希算法模拟已结束',
	  	   '2、用户可点击右上角的重置进行重新操作，或返回主界面选择其他篇章。'
	  	  ]
		  },
		 
		],
		
		//椭圆线
		ecc__stepTips:[
		  {step:1,infolist:['1、点击左侧工具箱内“生成哈希”按钮，通过改变a与b的数值尝试生成一段椭圆线。并通过椭圆线点的相加运算得出公钥与私钥。',
		   '2.可分别点击用户A,B,C 查看公钥以及私钥。']
		  },
		  {step:2,infolist:['1.点击左侧工具箱内“发送”按钮，将用户A通过用户B公钥加密过后的数据传输至用户B。',
		   '2.等待数据传输完毕，并点击查看用户C的状态。']
		  },
		  {step:3,infolist:['1.点击左侧工具箱内“解析”按钮，将用户B接受到的数据进行解析。',
		   '2.等待解析过程完毕，点击查看用户B的状态。']
		  },
		  {step:4,infolist:['1.点击左侧工具箱内“解析”按钮，将用户B接受到的数据进行解析。',
		   '2.等待解析过程完毕，点击查看用户B的状态。']
		  }
		 ],
		
		//对称加密
		encrAlgorithm_stepTips:[{step:1,infolist:['1、点击左侧工具箱的加密按钮，使用对称密钥算法对一串数据进行加密。',
		'2、点击左侧工具箱的解密按钮，用相同的密钥对加密数据进行解密']}],
		//keystore
		keyStore_stepTips:[{step:1,infolist:['1、请按页面内步骤进行操作。']}], 
		
		data_stepTips:[{step:1,infolist:['1、点击区块图标，查看区块的数据结构']}],
		
		s_medicalCare:[
		  {step:1,infolist:[
		  	'1、点击任意医院进行病人信息上链存证。',
		  	'2、病人信息上传成功则默认病人对此医院授权开放',
		  	'3、点击任意医院进行病人信息查询。如无法操作则需至“病人”开放授权。'
		  ]
		  },
		  
		],
		
		s_copyRight:[
		  {step:1,infolist:[
		  	'1、点开登记人页面填写版权信息，并存证上链生成哈希。',
		  	'2、点击页面内“出版社”板块进行信息内容二次确认并上链存证。',
		  	'3、在主界面，分别点击登记人和出版社可查询对应哈希。',
		  	'4、点击进入查证处，输入登记人哈希可查询版权详情。'
		    ]
		  }
		],
		
		s_donation:[
		  {step:1,infolist:[
		  	'1、点击页面内“捐赠人”板块，进行捐赠人信息内容登记上链。',
		  	'2、点击页面内“红十字会”板块进行信息内容二次确认并上链存证。',
		  	'3、分别点击“捐赠人”与“红十字会“板块可查看上链存证之后的哈希值。',
		  	'4、点击页面内“受益人”并输入上链存证的哈希值进行查询。'
		    ]
		  }
		],
		s_logistics:[
		  {step:1,infolist:[
		  	'1、点击寄件人页面，输入寄件信息，并存证上链生成哈希。',
		  	'2、点击进入代收点输入订单信息，并存证上链生成哈希。',
		  	'3、点击进入物流页面，可查询物流信息并存证上链，获得哈希。',
		  	'4、在主界面，分别点击寄件人、代收点、物流可查询对应哈希。',
		  	'5、点击进入收件人页面，输入单号可查询物流详情。'
		    ]
		  }
		],
		s_finance:[
		  {step:1,infolist:[
		  	'1、点击进入供应商页面，提供融资和供货合同信息，并存证上链生成哈希。',
		  	'2、点击进入核心企业页面。核心企业对供应商提供的信息予以佐证并上链。',
		  	'3、在主界面，分别点击供应商、核心企业可查询对应哈希。',
		  	'4、点击进入银行页面，输入供应商哈希可查询融资详情。',
		    ]
		  }
		],
		s_insurance:[
		  {step:1,infolist:[
		  	'1、点击进入个人用户页面，填写航空延误险的保单信息来申请理赔，并存证上链生成哈希。',
		  	'2、点击进入航空公司页面，对航班延误进行佐证上链。',
		  	'3、在主界面，分别点击个人用户和航空公司可查询对应哈希。',
		  	'4、点击保险公司页面，输入个人用户哈希，查询保单和航班详情，并确认理赔。',
		    ]
		  }
		]
		
		
  },
  mutations: {
  
  },
  getters: {
    getNum (state) {
      return state.num
    }
  },
  mutations: {
    add (state, value) {
      state.num = value
    }
  }
})


export default store 
