<!--  -->
<template>
<div class="team">
  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content team-item">
    <div class="itemList" v-for="(item, index) in itemList" :key="index">
      <router-link :to="{ path : item.url, query: { userId: 123} }" ><img :src="item.imgUrl" alt=""></router-link>
      <div class="itemDis">
        <h3>{{item.name}}</h3>
        <p class="numberDis">{{item.numberDis}}</p>
        <p style="font-weight: 600">设计理念：</p>
        <p class="ideaDis">{{item.ideaDis}}</p>
        <span>立即预约</span>
      </div>
    </div>

  </div>

  <div class="page">
    <el-pagination background="true" layout="prev, pager, next" :total="100">
    </el-pagination>
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
      itemList: [{
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/number_img1.jpg'),
          name: '晶晶',
          numberDis: '3年工作经验，擅长简欧轻奢和现代风格',
          ideaDis: '用心体验生活的点滴，才能从细节中创造出更为舒适的居住环境',
          url: '/teamMember'
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.team {
  background: #efefef;

  .team-item {
    display: flex;
    flex-wrap: wrap;

    .itemList {
      display: flex;
      padding: 10px 10px;
      background: #fff;
      margin: 0 10px 24px 0;
      width: 570px;
      img {
        transition: all 0.2s ease-in;
      }
      img:hover {
        cursor: pointer;
        transform: scale(1.045);
      }
      .itemDis {
        padding: 20px 18px 0 18px;

        h3 {
          color: #29498a;
          font-weight: 500;
          margin: 0 0 15px 0;
        }

        .numberDis,
        .ideaDis {
          font-size: 14px;
          color: #333;
        }

        .numberDis {
          margin: 0 0 15px 0;
        }

        .ideaDis {
          margin: 15px 0 0 0;
        }

        p {
          line-height: 1.6;
        }

        span {
          width: 218px;
          height: 42px;
          background: #29498a;
          color: #fff;
          text-align: center;
          display: block;
          line-height: 42px;
          margin: 24px auto 0;
        }

        span:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.page {
  display: flex;
  justify-content: center;
  padding: 30px 0 50px 0;

  .el-pager li {
    background-color: #fff !important;
  }
}
</style>
