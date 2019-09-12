<!--  -->
<template>
<div>
  <div class="top">
    <div class="logo">
      <img src="../assets/images/logo.png" />
      <div class="header-tit">
        <h1>湖南唯世美创装饰工程有限公司</h1>
        <p>HUNAN WEISHIMEICHUANG DECORATION ENGINEERING CO., LTD</p>
      </div>
    </div>
    <div class="navlist" ref="nav">
      <ul>
        <li id="navLi" v-for="(item, index) in navlist" :key="index" @click="cur=index" :class="cur==index?'active':''">
          <router-link :to="{ path : item.path }" @click.native="changeNav(index)">{{item.tit}}</router-link>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      cur: 0,
      navlist: [{
          tit: "首页",
          path: '/'
        },
        {
          tit: "经典案例",
          path: '/companyCase'
        },
        {
          tit: "VR实景",
          path: '/vrScene'
        },
        {
          tit: "设计团队",
          path: '/team'
        },
        {
          tit: "装修攻略",
          path: '/strategy'
        },
        {
          tit: "唯世美创",
          path: '/aboutUs'
        }
      ]
    };
  },

  components: {},

  computed: {

  },

  mounted() {
    //获取本地储存的cur值，解决页面刷新后导航选取bug
    var localCur = JSON.parse(window.localStorage.getItem('cur'));
    this.cur = localCur;
  },
  //在实例创建后获取传参
  created() {
    
  },

  methods: {
    //实时获取导航选取的值 配合@click.native使用
    changeNav(index) {
      this.cur = index;
      //设置本地储存
      localStorage.setItem('cur', index);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  background: #fff;

  .logo {
    display: flex;
    margin: 15px 0 15px 0;

    .header-tit {
      h1 {
        font-size: 26px;
        margin: 18px 0 0 6px;
      }

      p {
        font-size: 12px;
        margin: 8px 0 0 6px;
        color: #666;
      }
    }
  }

  .navlist {
    margin-left: 6%;

    ul {
      display: flex;

      a {
        display: inline-block;
        font-size: 18px;
        height: 120px;
        line-height: 120px;
        padding: 0 26px 0 26px;
        background: none;
        transition: all 0.3s ease-in;
        color: #000;
      }

      li:hover {
        background: #29498a;
        cursor: pointer;

        a {
          color: #fff;
        }
      }
    }
  }
}

.active {
  background: #29498a;

  a {
    color: #fff !important;
  }
}
</style>
