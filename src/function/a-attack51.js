import comHeader from '@/components-teach/sheader';
import comFooter from '@/components-teach/footer';
import rightTips from '@/components-teach/tips';
export default{
	data(){
		return{
		  menuShow:false,//上方菜单按钮是否显示
		  showTool:false,//左侧工具箱是否显示		
		  funNum:0,//左侧点击判断工具箱
		  menuText:'异常篇-51%攻击',
		  
		  step:1,//当前步骤
		  pageName:'51',

		  operaInfo:{mess:'暂无状态，请先按照右侧步骤提示操作~。',infolist:[]},//底部传递的信息
		  singleStep:true,//单步骤提示
		  
		  confirShow:false,
  
      iconUrl_1:require('../assets/teachImg/icon_user2.png'),//头像
      iconUrl_2:require('../assets/teachImg/icon_user3.png'),//头像
      iconUrl_3:require('../assets/teachImg/icon_user4.png'),//头像

      lineDraw51Show: false,
      tansferInfo: [],
      wprogress51:0, //打包的进度
      delayTimer:null,//延迟执行时间
      isshowdel: -1, // 是否显示删除按钮
      upComputeUser: '',
      del51: -1,
      balance: 850, // tips显示的余额
      balance1: 850,
      balance2: 850,
      balance3: 850,
      isShowAmount: false,
      
      transNumber:0,//转账次数
    }
	},
	components:{
		comHeader,comFooter,rightTips
	},
	computed: {
		stepTips(){
			return this.$store.state.a_51attack
		}
	},
	methods:{
		//点击菜单图标
	  clickMenu(){
	 	  this.menuShow = !this.menuShow
	  },
	  //点击弹出框我知道了方法
	  tipSure(){
	  	let that = this
	  	that.confirShow = false;
	  	if(that.step==1){
	  		that.step = that.step + 1;
	  	}
	  },
    //点击左边的三个工具箱
    poinfun(num){
      let that = this;
      if(num==2  && that.tansferInfo.length>0 && that.step != 4 && (that.step<5 || that.step==11) ){
        that.step = 3;
        that.lineDraw51Show = true
        that.funNum = num;
      }
      if(num==1 && (that.step<3 || that.step == 11) && that.transNumber<3) {
        that.step = 2;
        that.lineDraw51Show = true
        that.isShowAmount = false;
        that.funNum = num;
        //that.operaInfo.mess = ''
        //that.operaInfo.infolist = [];
      }
      if(num==3 && (that.step == 4 || that.step == 11)){
        that.step = 4;
        that.lineDraw51Show = true
        that.funNum = num;
        that.operaInfo.mess = ''
        that.operaInfo.infolist = [];
        let timer = setInterval(function() {
          that.wprogress51++;
          if(that.wprogress51 == 100) {
            clearInterval(timer)
            that.delayTimer = setTimeout(function(){
              that.lineDraw51Show = false
              that.confirShow = true;
              that.step = that.step + 1;
            },500)
          }
        },50)
      }
    },
    sureUpCompute(upComputeUser) {
      let that = this;
      that.lineDraw51Show = false
      that.step = that.step + 1
      that.confirShow = true;
      that.upComputeUser = upComputeUser
      
      if (that.upComputeUser == 'A') {
        that.iconUrl_1 = require('../assets/teachImg/icon_user2_warning.png')
      } else
      if (that.upComputeUser == 'B') {
        that.iconUrl_2 = require('../assets/teachImg/icon_user3_warning.png')
      } else
      if (that.upComputeUser == 'C') {
        that.iconUrl_3 = require('../assets/teachImg/icon_user4_warning.png')
      }
    },
    sureTransfer(tansferInfo) {
      let that = this;
      if (that.tansferInfo.length > 2) {
        that.lineDraw51Show = false
        return;
      }
      that.lineDraw51Show = false
      that.step = 2
      
      if (tansferInfo.initiate == 'A') {
        that.balance1 = that.balance1 - parseInt(tansferInfo.amount)
        if (tansferInfo.object == 'B') {
          that.balance2 = that.balance2 + parseInt(tansferInfo.amount)
        } else if (tansferInfo.object == 'C') {
          that.balance3 = that.balance3 + parseInt(tansferInfo.amount)
        }
        that.balance = that.balance1
      } else if (tansferInfo.initiate == 'B') {
        that.balance2 = that.balance2 - parseInt(tansferInfo.amount)
        if (tansferInfo.object == 'A') {
          that.balance1 = that.balance1 + parseInt(tansferInfo.amount)
        } else if (tansferInfo.object == 'C') {
          that.balance3 = that.balance3 + parseInt(tansferInfo.amount)
        }
        that.balance = that.balance2
      } else if (tansferInfo.initiate == 'C') {
        that.balance3 = that.balance3 - parseInt(tansferInfo.amount)
        if (tansferInfo.object == 'A') {
          that.balance1 = that.balance1 + parseInt(tansferInfo.amount)
        } else if (tansferInfo.object == 'B') {
          that.balance2 = that.balance2 + parseInt(tansferInfo.amount)
        }
        that.balance = that.balance3
      }
      that.tansferInfo.push({
        initiate: tansferInfo.initiate,
        object: tansferInfo.object,
        amount: tansferInfo.amount
      })
      that.transNumber = that.transNumber + 1;
      if(that.transNumber==1){
      	that.delayTimer = setTimeout(function(){
	      	that.confirShow = true;
	      },500)
      }
      
      that.operaInfo.mess = ''
      that.operaInfo.infolist = [];
      
    },
    sureBale() {
      let that = this;
      that.lineDraw51Show = false
      that.confirShow = true;
      that.step = that.step + 1;
    },
    showdel(index) {
      let that = this;
      that.del51 = index;
      that.step = 11;
      that.lineDraw51Show = true;
    },
    del () {
	    let that = this
      that.lineDraw51Show = false
      if(that.tansferInfo[that.del51].initiate == 'A') {
        that.balance1 = that.balance1 + parseInt(that.tansferInfo[that.del51].amount)
        if(that.tansferInfo[that.del51].object == 'B'){
          that.balance2 = that.balance2 - parseInt(that.tansferInfo[that.del51].amount)
        } else if (that.tansferInfo[that.del51].object == 'C') {
          that.balance3 = that.balance3 - parseInt(that.tansferInfo[that.del51].amount)
        }
      } else if (that.tansferInfo[that.del51].initiate == 'B') {
        that.balance2 = that.balance2 + parseInt(that.tansferInfo[that.del51].amount)
        if(that.tansferInfo[that.del51].object == 'A'){
          that.balance1 = that.balance1 - parseInt(that.tansferInfo[that.del51].amount)
        } else if (that.tansferInfo[that.del51].object == 'C') {
          that.balance3 = that.balance3 - parseInt(that.tansferInfo[that.del51].amount)
        }
      } else if (that.tansferInfo[that.del51].initiate == 'C') {
        that.balance3 = that.balance3 + parseInt(that.tansferInfo[that.del51].amount)
        if(that.tansferInfo[that.del51].object == 'A'){
          that.balance1 = that.balance1 - parseInt(that.tansferInfo[that.del51].amount)
        } else if (that.tansferInfo[that.del51].object == 'B') {
          that.balance2 = that.balance2 - parseInt(that.tansferInfo[that.del51].amount)
        }
      }
      that.tansferInfo.splice(that.del51, 1)
    },
    canc() {
      let that = this
      that.lineDraw51Show = false
    },
    enter(index) {
      let that = this;
      if (that.tansferInfo.length > 1) {
        that.isshowdel = index;
      }
    },
    leave() {
      let that = this;
      that.isshowdel = -1;
    },
    showAmount(user) {
      let that = this;
      that.isShowAmount = true;
      if (user == 1) {
        that.balance = that.balance1;
        that.operaInfo.mess = '当前余额为￥' + that.balance +'。'
        that.operaInfo.infolist = [];
      } else if(user == 2) {
        that.balance = that.balance2;
        that.operaInfo.mess = '当前余额为￥' + that.balance +'。'
        that.operaInfo.infolist = [];
      } else if(user == 3) {
        that.balance = that.balance3;
        that.operaInfo.mess = '当前余额为￥' + that.balance +'。'
        that.operaInfo.infolist = [];
      }
    },
    noShowAmount() {
      let that = this;
      
      
      if(that.tansferInfo.length==0){
      	that.operaInfo.mess = '暂无状态，请先按照右侧步骤提示操作~。'
        that.operaInfo.infolist = [];
      }else{
      	that.operaInfo.mess = ''
        that.operaInfo.infolist = [];
        that.isShowAmount = false;
      }
     
    },
    
    //点击透明区域隐藏
    hideLineDrawShow(){
    	 this.lineDraw51Show = false
    },
    
    showUserAmount(user) {
      let that = this;
      if (user == 'A') {
        that.balance = that.balance1;
      } else if(user == 'B') {
        that.balance = that.balance2;
      } else if(user == 'C') {
        that.balance = that.balance3;
      }
    }
 	},
  mounted(){
    let that = this
    that.$nextTick(() => {
      that.confirShow = true
    })
  },
  beforeDestroy() {
	   if(this.delayTimer) {
		　　clearInterval(this.delayTimer); //关闭
		 }
	 
   }
}
