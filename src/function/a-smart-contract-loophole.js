import comHeader from '@/components-teach/sheader';
import comFooter from '@/components-teach/footer';
import rightTips from '@/components-teach/tips';
export default{
	data(){
		return{
		  menuShow:false,//上方菜单按钮是否显示
		  showTool:false,//左侧工具箱是否显示
      confirShow:false,//右侧弹窗
		  funNum:0,//左侧点击判断工具箱
		  menuText:'异常篇-合约漏洞',
      iconUrl_1:require('../assets/teachImg/icon_user1.png'),//头像
		  step:1,//当前步骤
		  pageName:56,//异常-合约漏洞
		  operaInfo:{mess:'暂无状态，请先按照右侧步骤提示操作~。',infolist:[]},//底部传递的信息
      D1:false,//提现金额对话框
      inputMoney:256

		}
	},
	components:{
		comHeader,comFooter,rightTips
	},
	computed: {
		stepTips(){
			return this.$store.state.ecc__stepTips
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
	  	/*if(that.step==4){
        that.step = that.step + 1;
        that.delayTimer = setTimeout(function(){
          that.confirShow = true
        },1000)
      }*/
	  },
    //点击左边的三个工具箱
    poinfun(num){
      //num==1提现
      let that = this;
      if(num==1 && that.step>=2 ){
        that.D1 = true
        that.funNum = num;
        that.step = that.step + 1;
        console.log("step"+that.step)
      }


    },
    //提现金额提交完成
    D1clickfinish(){
      let that = this;
      that.D1 = false;
      that.step = 4;
      that.confirShow = true
      that.inputMoney = that.inputMoney - 1;
    }
	},
  mounted(){
  let that = this
  that.$nextTick(() => {
    that.confirShow = true
  })
}
}
