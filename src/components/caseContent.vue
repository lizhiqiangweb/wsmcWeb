<!--  -->
<template>
<div class="caseContent">
  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content" v-for="(item, index) in dataList" v-show="item.id==showItem" :key="index">
    <div class=" top">
      <h3>{{item.tit}}</h3>
      <p>{{item.dis}}</p>
    </div>
    <div class=" dis">
      <img :src="item.mainImg" alt="">
      <div class="myselfDis">
        <img :src="item.myselfDis.myselfImg" alt="">
        <h4>{{item.myselfDis.name}}</h4>
        <p>从业年限：<span>{{item.myselfDis.workAge}}</span></p>
        <p>擅长风格：<span>{{item.myselfDis.style}}</span></p>
        <p>设计理念：<span>{{item.myselfDis.linian}}</span></p>
      </div>
    </div>
    <div class=" homeDis">
      <ul>
        <li>案例风格：</li><span>{{item.homeDis.style}}</span>
        <li>案例面积：</li><span>{{item.homeDis.area}}</span>
        <li>所在城市：</li><span>{{item.homeDis.city}}</span>
      </ul>
      <ul>
        <li>案例户型：</li><span>{{item.homeDis.apartment}}</span>
        <li>楼盘名称：</li><span>{{item.homeDis.name}}</span>
        <li>案例造价：</li><span>{{item.homeDis.price}}</span>
      </ul>
    </div>

    <div class="content content-main">
      <img :src="item.contentMain.imgUrl" alt="">
      <p v-for="(item1, i) in item.contentMain.content" :key="i">{{item1}}</p>
    </div>

    <div class="content-item" v-for="(item2, index1) in item.contentItem" :key="index1">
      <h4><span>△</span> {{item2.tit}}</h4>
      <img :src="item2.imgUrl1" alt="">
      <p v-for="(item3, index3) in item2.content" :key="index3">{{item3}}</p>
      <img :src="item2.imgUrl2" alt="">
    </div>

  </div>

  <div class="caseContent-main">
    <img src="" alt="">
    <p></p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      bannerHeight: 740,
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      showItem: '',
      dataList: [{
          id: 'bo1',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '二居 欧式 80-100㎡',
          mainImg: require('@/assets/images/case/bo/1/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team_icon1.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '80-100㎡',
            city: '长沙',
            apartment: '二居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: require('@/assets/images/case/bo/1/main.jpg'),
            content: [
              '北欧风格以简洁、自然、人性化为主导；',
              '简约风格是将设计的元素、色彩、照明、原材料简化到最少的程度；',
              '但其色彩、材料的总体搭配要求又尤为突出。',
              '北欧风格简洁、现代,以浅色为代表,整体感舒适自然,突出的人性化特性颇受现在年轻人的喜爱。'
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/1/1.jpg'),
              imgUrl2: require('@/assets/images/case/bo/1/2.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '主卧',
              imgUrl1: require('@/assets/images/case/bo/1/3.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '次卧',
              imgUrl1: require('@/assets/images/case/bo/1/4.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            }
          ]
        },
        {
          id: 'bo2',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '三居 欧式 100-140㎡',
          mainImg: require('@/assets/images/case/bo/2/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team_icon1.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '100-140㎡',
            city: '长沙',
            apartment: '三居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: require('@/assets/images/case/bo/2/main.jpg'),
            content: [
              '北欧风格以简洁、自然、人性化为主导；',
              '简约风格是将设计的元素、色彩、照明、原材料简化到最少的程度；',
              '但其色彩、材料的总体搭配要求又尤为突出。',
              '北欧风格简洁、现代,以浅色为代表,整体感舒适自然,突出的人性化特性颇受现在年轻人的喜爱。'
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/2/1.jpg'),
              imgUrl2: require('@/assets/images/case/bo/2/2.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '主卧',
              imgUrl1: require('@/assets/images/case/bo/2/3.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '次卧',
              imgUrl1: require('@/assets/images/case/bo/2/4.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            }
          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},

  created() {
    var id = this.$route.query.case;
    this.showItem = id;
    console.log(this.showItem);
  },
}
</script>

<style lang="scss" scoped>
.caseContent {
  .content {
    .top {
      p {
        margin: 18px 0 26px 0;
      }
    }

    .dis {
      display: flex;

      img {
        width: 765px;
        height: 574px;
      }

      .myselfDis {
        padding: 28px 14px 14px 14px;
        margin: 0 0 0 28px;
        border: 1px solid #111;

        img {
          width: 395px;
          height: 270px;
        }

        h4 {
          line-height: 3.8;
        }

        p {
          line-height: 3.8;
          color: #333;
        }
      }

    }

    .homeDis {
      margin: 28px 0 0 0;

      ul {
        display: flex;
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #999;

        li {
          width: 150px;
          height: 75px;
          line-height: 75px;
          background: #c9c9c9;
          text-align: center;
        }

        span {
          display: inline-block;
          width: 250px;
          height: 75px;
          line-height: 75px;
          text-align: center;
        }
      }

      ul:last-child {
        border-bottom: 1px solid #999;

      }
    }

    .content-main {
      img {
        display: block;
        margin: 0 auto 28px;
      }

      p {
        text-align: center;
        line-height: 2;
      }
    }

    .content-item {
      h4 {
        margin: 30px 0 0 0;
        font-size: 18px;
      }

      img {
        display: block;
        margin: 22px auto 28px;
      }

      p {
        text-align: center;
        line-height: 2;
      }
    }
  }

}
</style>
