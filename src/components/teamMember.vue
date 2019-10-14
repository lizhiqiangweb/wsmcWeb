<!--  -->
<template>
<div class="teamMember">
  <div class="banner">

  </div>
  <div class="works content">
    <div class="worksItem" v-for="(item, dataIndex) in dataList" :key="dataIndex">
      <img v-for="(item1, index1) in item.imgList" :key="index1" :src="item1" alt="">
    </div>
  </div>

  <div class="page">
    <el-pagination background="true" layout="prev, pager, next" :total="1">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [{
          id: 'sj1',
          imgList: [
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg'),
            require('@/assets/images/memberWorks/wroks_img1.jpg')
          ]
        }

      ]
    };
  },

  components: {},

  computed: {},

  methods: {},

  created() {
    var id = this.$route.query.teamNumber;
    this.showItem = id;
    console.log("id :", this.showItem);
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  visibility: hidden;
}

.teamMember {
  position: relative;

  .banner {
    background: url(../assets/images/bg_member.jpg) no-repeat;
    width: 100%;
    height: 550px;

  }

  .works {
    display: flex;
    flex-wrap: wrap;

    .worksItem {
      display: flex;
      flex-wrap: wrap;

      img {
        display: block;
        width: 390px;
        height: 390px;
        margin: 0 5px 24px;
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
