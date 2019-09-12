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
      <router-link :to="{ path : item.url, query: { id: 123} }" ><img :src="item.imgUrl" alt=""></router-link>
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
    <el-pagination background layout="prev, pager, next" :total="1">
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
          imgUrl: require('@/assets/images/team/hj.jpg'),
          name: '胡静',
          numberDis: '五年工作经验，擅长美式、北欧',
          ideaDis: '室内设计的首要目标在于满足客户生活的基本需要。简单的家居空间，通过设计更加富有艺术美感并同时改善生活空间的舒适度，让您十年后仍爱你的家。',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/team/lym.jpg'),
          name: '刘益明',
          numberDis: '二年工作经验，擅长轻奢、北欧',
          ideaDis: '以人为本；好的设计来自于对业主全方位的了解及沟通，只有基于人来思考设计，才能做出好的设计。',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/team/yll.jpg'),
          name: '袁玲玲',
          numberDis: '五年工作经验，擅长地中海、轻奢',
          ideaDis: '设计不但要引领潮流、还要融入生活、设计灵感、是出自于生活但又高于生活的一种产物。',
          url: '/teamMember'
        },
        {
          imgUrl: require('@/assets/images/team/zyt.jpg'),
          name: '周玉婷',
          numberDis: '三年工作经验，擅长新中式、简欧',
          ideaDis: '设计源于生活，生活因设计而改变！成就空间和谐，让设计物有所值，让细节缔造完美！',
          url: '/teamMember'
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
