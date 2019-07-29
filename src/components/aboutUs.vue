<!--  -->
<template>
<div class="aboutUs">
  <div class="content-item content">
    <div class="item-tit">
      <h1>01</h1>
      <p>公司简介</p>
      <span>Company Profile</span>
    </div>

    <div class="item-main">
      <div class="main-dis">
        <h3>湖南唯世美创装饰工程有限公司</h3>
        <p>唯世美创成立于2019年，是一家集装饰设计、工程施工、材料配送一体化的一家湖南装饰公司；</p>
        <p>拥有经验丰富、时尚创新的设计队伍；正规培训、素质优良的技工；严格、专业的管理人员；先进的办公及施工设备；人文、科学的企业管理模式，为工程的质量和公司的发展提供了可靠的保证。</p>
      </div>
      <img src="@/assets/images/aboutUs_img1.jpg" alt="">
    </div>

    <div class="item-tit">
      <h1>02</h1>
      <p>公司荣誉</p>
      <span>Corporate Honour</span>
    </div>

    <div class="item-main">
      <div class="main-imgList">
        <img v-for="(item, index) in imgList" :key="index" :src="item" alt="">
      </div>
    </div>

    <div class="item-tit">
      <h1>03</h1>
      <p>招贤纳士</p>
      <span>Company Recruit</span>
    </div>

    <div class="item-main1">
      <div v-for="(item, index) in postList1" :key="index">
        <h3>{{item.post}}<span>{{item.wages}}</span></h3>
        <div class="item-content">
          <p v-for="(dis, index) in item.postDis" :key="index">{{dis}}</p>
        </div>
      </div>

      <div v-for="(item, index) in postList2" :key="index">
        <h3>{{item.post}}<span>{{item.wages}}</span></h3>
        <div class="item-content">
          <p v-for="(dis, index) in item.postDis" :key="index">{{dis}}</p>
        </div>
      </div>

      <div v-for="(item, index) in postList3" :key="index">
        <h3>{{item.post}}<span>{{item.wages}}</span></h3>
        <div class="item-content">
          <p v-for="(dis, index) in item.postDis" :key="index">{{dis}}</p>
        </div>
      </div>
    </div>

    <div class="item-tit">
      <h1>04</h1>
      <p>客户评价</p>
      <span>Customer Evaluation</span>
    </div>

    <div class="item-main">
      <div class="main-imgList">
        <img v-for="(item, index) in imgList1" :key="index" :src="item" alt="">
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg'),
        require('@/assets/images/aboutUs_img1.jpg')
      ],
      imgList1: [
        require('@/assets/images/aboutUs_img2.jpg'),
        require('@/assets/images/aboutUs_img3.jpg'),
        require('@/assets/images/aboutUs_img2.jpg'),
        require('@/assets/images/aboutUs_img3.jpg'),
        require('@/assets/images/aboutUs_img2.jpg'),
        require('@/assets/images/aboutUs_img3.jpg'),
        require('@/assets/images/aboutUs_img2.jpg'),
        require('@/assets/images/aboutUs_img3.jpg')
      ],
      postList1: [{
          post: '销售人员8名（市场部)',
          wages: '6000-8000元',
          postDis: [
            '任职资格：',
            '1、高中以上学历，普通话流利、服务意识强，对自己有清晰的人生规划；',
            '2、有家居店面销售工作经验者优先；',
            '3、具备良好的商务谈判能力;',
            '4、了解产品信息，掌握相关市场动态;',
            '5、具备良好的表达能力和沟通协调能力。'
          ]
        }
      ],
      postList2: [{
          post: '销售人员 8名（网络部）',
          wages: '4000-10000元',
          postDis: [
            '任职资格：',
            '1、高中以上学历，普通话流利、服务意识强，对自己有清晰的人生规划；',
            '2、有家居店面销售工作经验者优先；',
            '3、具有较强的沟通能力及服务意识，吃苦耐劳；',
            '4、年龄20-35岁，形象良好，身体健康，气质佳；',
            '5、上班地址在长沙市各区域店。'
          ]
        }
      ],
      postList3: [{
          post: '销售人员8名（市场部)',
          wages: '6000-8000元',
          postDis: [
            '任职资格：',
            '1、高中以上学历，普通话流利、服务意识强，对自己有清晰的人生规划；',
            '2、有家居店面销售工作经验者优先；',
            '3、具备良好的商务谈判能力;',
            '4、了解产品信息，掌握相关市场动态;',
            '5、上班地址在长沙市各区域店。'
          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.aboutUs {
  background: #efefef;

  .item-tit {
    width: 140px;

    p,
    span,
    h1 {
      display: block;
      margin: 0 auto;
    }

    p,
    span {
      color: #333;
      text-align: center;
      line-height: 1.6;
    }

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px;
      padding: 0 0 20px 0;
    }

    h1 {
      font-size: 70px;
      padding: 20px 0 16px 30px;
      font-weight: 500;
    }
  }

  .item-main {
    margin: 0 0 0 130px;
    padding: 30px 0 30px 0;
    border-left: 1px dashed #999;
    display: flex;

    p {
      line-height: 1.8;
      padding: 0 40px 0 40px;
      text-indent: 2em;
      color: #333;
    }

    h3 {
      text-align: center;
      padding: 42px 0 12px 0;
    }

    .main-imgList {
      padding: 0 0 0 30px;

      img {
        width: 249px;
        height: 186px;
        margin: 0 10px 10px 0;
      }
    }
  }

  .item-main1 {
    margin: 0 0 0 130px;
    padding: 30px 0 30px 30px;
    border-left: 1px dashed #999;

    h3 {
      background: #29498a;
      color: #fff;
      padding: 10px 14px;

      span {
        float: right;
        font-size: 16px;
      }
    }

    .item-content {
      padding: 20px 0 26px 20px;

      p {
        line-height: 1.6;
        color: #333;
      }
    }

  }

}
</style>
