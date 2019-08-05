<!--  -->
<template>
<div class="companyCase">
  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content list">
    <ul v-for="(item, index) in list" :key="index">
      <p>{{item.tit}}</p>
      <li v-for="(item1, index1) in item.listItem1" :key="index1" v-on:click="selected1(index1)" @click="cur1=index1" :class="cur1==index1 ? 'active':''">{{item1}}</li>
      <li v-for="(item2, index2) in item.listItem2" :key="index2" v-on:click="selected2(index2)" @click="cur2=index2" :class="cur2==index2 ? 'active':''">{{item2}}</li>
      <li v-for="(item3, index3) in item.listItem3" :key="index3" v-on:click="selected3(index3)" @click="cur3=index3" :class="cur3==index3 ? 'active':''">{{item3}}</li>
    </ul>
  </div>

  <div class="content imgList">
    <ul>
      <li v-for="(item, index) in imgList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" v-show="(typeId == item.type || typeId == 0) && (styleId1 == item.style || styleId1 == 0)">
        <router-link :to="{ path : item.url, query: { case: item.id } }">
          <img :src="item.imgUrl" alt="">
        </router-link>
        <h4>{{item.tit}}</h4>
        <p>{{item.dis}}</p>
      </li>
    </ul>
  </div>

  <div class="page">
    <el-pagination background="true" layout="sizes, prev, pager, next" :page-sizes="6" :pager-count="11" :total="all" @current-change="current_change"></el-pagination>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur1: 0,
      cur2: 0,
      cur3: 0,
      bannerHeight: 740,
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      currentPage: 1, //当前页码
      all: 0, //默认数据总数
      totalPage: 0, //当前条数
      pagesize: 6, //每页的数据显示条数
      typeId: 0,
      styleId1: 0,
      styleId2: 0,
      list: [{ //tab
          tit: '风格',
          listItem1: ['全部', '新中式', '现代黑白灰', '地中海', '简欧现代', '欧式别墅', '小美风', '轻奢风', '北欧']
        },
        {
          tit: '户型',
          listItem2: ['全部', '客厅', '餐厅', '厨房', '卧室', '书房', '玄关', '衣帽间', '儿童房']
        },
        {
          tit: '空间',
          listItem3: ['全部', '80-100㎡', '100-120㎡', '120-150㎡', '150㎡以上', '别墅']
        }
      ],
      imgList: [{ //case数据
          id: 'bo1',
          imgUrl: require('../assets/images/case/bo/1/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 二居 | 80-100㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8,
          style: 1
        },
        {
          id: 'bo2',
          imgUrl: require('../assets/images/case/bo/2/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 100-140㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8,
          style: 1
        },
        {
          id: 'bo3',
          imgUrl: require('../assets/images/case/bo/3/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 二居 | 80-120㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo4',
          imgUrl: require('../assets/images/case/bo/4/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo5',
          imgUrl: require('../assets/images/case/bo/5/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo6',
          imgUrl: require('../assets/images/case/bo/6/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo7',
          imgUrl: require('../assets/images/case/dzh/1/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo8',
          imgUrl: require('../assets/images/case/dzh/2/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo9',
          imgUrl: require('../assets/images/case/dzh/3/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        },
        {
          id: 'bo10',
          imgUrl: require('../assets/images/case/dzh/4/main.jpg'),
          tit: '北欧风格案例图',
          dis: '| 三居 | 120-150㎡ | 北欧装修风格设计',
          url: '/caseContent',
          type: 8
        }

      ],
    };
  },
  created() {
    this.all = (this.imgList.length) / 6 * 10;
  },
  components: {},

  computed: {},

  mounted: {},

  methods: {
    current_change(currentPage) { //改变当前页
      this.currentPage = currentPage
    },
    selected1: function(index) {
      if(index) {
        this.typeId = index;
      } else {
        this.typeId = 0;
      }
    },
    selected2: function(index) {
      if(index) {
        this.styleId1 = index;
      } else {
        this.styleId1 = 0;
      }
    },
    selected3: function(index) {
      if(index) {
        this.styleId2 = index;
      } else {
        this.styleId2 = 0;
      }
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

        img {
          width: 375px;
          height: 375px;
        }
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
