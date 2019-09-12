<!--  -->
<template>
<div class="strategy">

  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content tabList">
    <ul>
      <li :class="cur == index ? 'active': ''" v-for="(item, index) in dataList" :key="index" @click="cur=index">{{item.tit}}</li>
    </ul>
  </div>

  <div class="content-main" v-show="cur==index" v-for="(item, index) in dataList" :key="index">
    <div class="content-box" v-for="(value, index) in item.contents" :key="index">
      <img :src="value.url" alt="">
      <div class="content-right">
        <h4>{{value.name}}</h4>
        <p>{{value.content}}</p>
        <span>{{value.date}}</span>
      </div>
    </div>
  </div>

  <div class="page">
    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      bannerHeight: 740,
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      dataList: [{
          tit: '选购主材',
          contents: [{
              url: require('@/assets/images/strategy_img1.jpg'),
              name: '如何选购壁纸？',
              content: '壁纸，是一种用于裱糊墙面的室内装修材料，广泛用于住宅、办公室、宾馆、酒店的室内装修等。壁纸分为很多类，如覆膜壁纸、涂布壁纸、压花壁 纸等。 通常用漂白化学木浆生产原纸， 再经不同工序的加工处理， 如涂布、 印刷、 压纹或表面覆塑， 最后经裁切、 包装后出厂。 具有一定的强度、 韧度、 美观的外表和良好的抗水性能。',
              date: '2019.06.26'
            },
            {
              url: require('@/assets/images/strategy_img1.jpg'),
              name: '如何选购壁纸？',
              content: '壁纸，是一种用于裱糊墙面的室内装修材料，广泛用于住宅、办公室、宾馆、酒店的室内装修等。壁纸分为很多类，如覆膜壁纸、涂布壁纸、压花壁 纸等。 通常用漂白化学木浆生产原纸， 再经不同工序的加工处理， 如涂布、 印刷、 压纹或表面覆塑， 最后经裁切、 包装后出厂。 具有一定的强度、 韧度、 美观的外表和良好的抗水性能。',
              date: '2019.06.26'
            },
            {
              url: require('@/assets/images/strategy_img1.jpg'),
              name: '如何选购壁纸？',
              content: '壁纸，是一种用于裱糊墙面的室内装修材料，广泛用于住宅、办公室、宾馆、酒店的室内装修等。壁纸分为很多类，如覆膜壁纸、涂布壁纸、压花壁 纸等。 通常用漂白化学木浆生产原纸， 再经不同工序的加工处理， 如涂布、 印刷、 压纹或表面覆塑， 最后经裁切、 包装后出厂。 具有一定的强度、 韧度、 美观的外表和良好的抗水性能。',
              date: '2019.06.26'
            },
            {
              url: require('@/assets/images/strategy_img1.jpg'),
              name: '如何选购壁纸？',
              content: '壁纸，是一种用于裱糊墙面的室内装修材料，广泛用于住宅、办公室、宾馆、酒店的室内装修等。壁纸分为很多类，如覆膜壁纸、涂布壁纸、压花壁 纸等。 通常用漂白化学木浆生产原纸， 再经不同工序的加工处理， 如涂布、 印刷、 压纹或表面覆塑， 最后经裁切、 包装后出厂。 具有一定的强度、 韧度、 美观的外表和良好的抗水性能。',
              date: '2019.06.26'
            }
          ]
        },
        {
          tit: '家居配饰',
          contents: [{
            url: require('@/assets/images/strategy_img1.jpg'),
            name: '如何选购壁纸？',
            content: '壁纸，是一种用于裱糊墙面的室内装修材料，广泛用于住宅、办公室、宾馆、酒店的室内装修等。壁纸分为很多类，如覆膜壁纸、涂布壁纸、压花壁 纸等。 通常用漂白化学木浆生产原纸， 再经不同工序的加工处理， 如涂布、 印刷、 压纹或表面覆塑， 最后经裁切、 包装后出厂。 具有一定的强度、 韧度、 美观的外表和良好的抗水性能。',
            date: '2019.06.26'
          }]
        },
        {
          tit: '装修知识',
          contents: [

          ]
        },
        {
          tit: '环保家居',
          contents: [

          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.strategy {
  background: #efefef;

  .tabList {
    ul {
      display: flex;

      li {
        width: 291px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background: #fff;
        margin: 0 0 0 12px;
        font-size: 20px;
        transition: all 0.3s ease-in;
      }

      li:first-child {
        margin: 0 0 0 0;
      }
    }
  }

  .tabList:hover {
    cursor: pointer;
  }

  .content-main {
    width: 1200px;
    margin: 0 auto;

    .content-box {
      padding: 10px 12px 10px 12px;
      margin: 30px auto;
      background: #fff;
      display: flex;
      box-shadow: 1px 1px 8px #ddd;

      .content-right {
        padding: 10px 10px;

        h4 {
          line-height: 1.6;
        }

        p {
          line-height: 1.6;
          margin: 10px auto;
          font-size: 14px;
          color: #333;
          text-indent: 2em;
        }

        span {
          line-height: 1.6;
        }
      }

      img {
        display: inline-block;
      }
    }
  }

  .page {
    display: flex;
    justify-content: center;
    padding: 20px 0 50px 0;

    .el-pager li {
      background-color: #fff !important;
    }
  }
}

.active {
  background: #29498a !important;
  color: #fff;
}
</style>
