<!--  -->
<template>
<div class="companyCase">
  <!-- <div class="content list">
    <ul v-for="(item, index) in list" :key="index">
      <p>{{item.tit}}</p>
      <li v-for="(item1, index1) in item.listItem" :key="index1" @click="cur=index.index1" :class="{active:cur==index1}">{{item1}}</li>
    </ul>
  </div> -->

  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="content imgList">
    <ul>
      <li v-for="(item, index) in imgList" :key="index" @click="goTo(item.path)">
        <img :src="item.url" alt="">
        <h4>{{item.tit}}</h4>
        <p>{{item.dis}}<span>立即预约</span></p>
      </li>
    </ul>
  </div>

  <div class="page">
    <el-pagination background layout="prev, pager, next" :total="all">
    </el-pagination>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      all: '',
      bannerHeight: 740,
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      list: [{
          tit: '风格',
          listItem: ['全部', '新中式', '现代黑白灰', '地中海', '简欧现代', '欧式别墅', '现代泰式', '小美风', '轻奢风', '北欧']
        },
        {
          tit: '户型',
          listItem: ['全部', '客厅', '餐厅', '厨房', '卧室', '书房', '玄关', '衣帽间', '儿童房']
        },
        {
          tit: '空间',
          listItem: ['全部', '80-100㎡', '100-120㎡', '120-150㎡', '150㎡以上', '别墅']
        }
      ],
      imgList: [{
          url: require('../assets/images/vr/companyCase_img1.jpg'),
          path: 'https://720.3vjia.com/S2FDDJFHH',
          tit: '北欧720全景',
          dis: '两室一厅｜80-120㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img2.jpg'),
          path: 'https://720.3vjia.com/S6EKGEDLI',
          tit: '北欧720全景',
          dis: '三室一厅｜100-120㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img3.jpg'),
          path: 'https://720.3vjia.com/S4FDHGJIG',
          tit: '后现代720全景',
          dis: '一室一厅｜100-120㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img4.jpg'),
          path: 'https://720.3vjia.com/S1FDFJKGF',
          tit: '美式轻奢720全景',
          dis: '三室一厅｜100-120㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img5.jpg'),
          path: 'https://720.3vjia.com/S1FDEHDLD',
          tit: '美式轻奢720全景',
          dis: '四室两厅｜120-160㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img6.jpg'),
          path: 'https://720.3vjia.com/S8FDCLILK',
          tit: '现代轻奢720全景',
          dis: '三室两厅｜120-140㎡'
        },
        {
          url: require('../assets/images/vr/companyCase_img6.jpg'),
          path: 'https://720.3vjia.com/S8FCJGDGG',
          tit: '新中式720全景',
          dis: '三室一厅｜120-140㎡'
        }
      ]
    };
  },

  components: {},

  mounted() {
    this.all = this.imgList.length;
  },
  methods: {
    goTo(e) {
      window.location.href = e;
    }
  }
}
</script>

<style lang="scss" scoped>
.companyCase {
  background: #efefef;

  .list {
    ul {
      display: flex;
      border: 1px solid #000;
      padding: 40px 100px 40px 32px;
      margin: 0 0 10px 0;

      li {
        display: flex;
        margin: 0 38px 0 0;
      }

      li:hover {
        cursor: pointer;
      }

      p {
        margin: 0 58px 0 0;
      }

    }
  }

  .imgList {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        background: #fff;
        padding: 8px 8px;
        margin: 0 8px 26px 0;
        width: 375px;
      }

      li:hover {
        cursor: pointer;
      }

      li:hover img {
        transform: scale(1.075);
      }

      img {
        transition: all .5s ease-in;
        width: 375px;
        height: 375px;
        display: block;
        overflow: hidden;
      }

      h4 {
        margin: 24px 0 18px 0;
      }

      p {
        margin: 0 0 12px 0;
        position: relative;

        span {
          display: inline-block;
          width: 188px;
          height: 44px;
          background: #2a498a;
          line-height: 44px;
          color: #fff;
          text-align: center;
          position: absolute;
          right: 0;
          bottom: 0;
        }

        span:hover {
          cursor: pointer;
        }
      }
    }
  }

  .page {
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;

    .el-pager li {
      background-color: #fff !important;
    }
  }
}

.active {
  margin: -10px 38px 0 0 !important;
  background: #2a498a;
  color: #fff;
  padding: 2px 16px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  border-radius: 6px;
}
</style>
