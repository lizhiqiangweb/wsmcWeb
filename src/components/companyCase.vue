<!--  -->
<template>
<div class="companyCase">
  <div class="content list">
    <ul v-for="(item, index) in list" :key="index">
      <p>{{item.tit}}</p>
      <li v-for="(item1, index1) in item.listItem" :key="index1" @click="cur=index.index1" :class="{active:cur==index1}">{{item1}}</li>
    </ul>
  </div>

  <div class="content imgList">
    <ul>
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.url" alt="">
        <h4>{{item.tit}}</h4>
        <p>{{item.dis}}</p>
      </li>
    </ul>
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
      cur: 0,
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
          url: require('../assets/images/companyCase_img1.jpg'),
          tit: '现代风格案例图',
          dis: '| 三居 | 120-150㎡ | 现代装修风格设计'
        },
        {
          url: require('../assets/images/companyCase_img1.jpg'),
          tit: '现代风格案例图',
          dis: '| 三居 | 120-150㎡ | 现代装修风格设计'
        },
        {
          url: require('../assets/images/companyCase_img1.jpg'),
          tit: '现代风格案例图',
          dis: '| 三居 | 120-150㎡ | 现代装修风格设计'
        },
        {
          url: require('../assets/images/companyCase_img1.jpg'),
          tit: '现代风格案例图',
          dis: '| 三居 | 120-150㎡ | 现代装修风格设计'
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
      }

      h4 {
        margin: 24px 0 18px 0;
      }

      p {
        margin: 0 0 12px 0;
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
