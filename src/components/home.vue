<!--  -->
<template>
<div class="home">
  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content flex">
    <div class="content1-left">
      <div class="content1-item" :class="{active:cur2==0}" @click="active(0)">
        <img class="icon" src="@/assets/images/icon11.png" alt ref="icon1" />
        <div>免费上门量尺</div>
      </div>
      <div class="content1-item" :class="{active:cur2==1}" @click="active(1)">
        <img class="icon" src="@/assets/images/icon2.png" alt ref="icon2" />
        <div>免费出装修预算</div>
      </div>
    </div>
    <div class="f">
      <div class="f-top">
        <input type="text" placeholder="请输入您的房屋面积" />
        <input type="text" placeholder="请输入您的装修风格" />
      </div>
      <input type="text" placeholder="请输入您的装修风格" />
      <input type="text" placeholder="请输入您的装修风格" />
      <button type="submit" value>立即预约</button>
    </div>
    <div class="content1-right">
      <div class="content1-item" :class="{active:cur2==2}" @click="active(2)">
        <img class="icon" src="@/assets/images/icon3.png" alt ref="icon3" />
        <div>免费卫生清洁</div>
      </div>
      <div class="content1-item" :class="{active:cur2==3}" @click="active(3)">
        <img class="icon" src="@/assets/images/icon4.png" alt ref="icon4" />
        <div>免费估算装修报价</div>
      </div>
    </div>
  </div>

  <div class="content content2">
    <h2>个性化整装产品</h2>
    <div class="list">
      <ul>
        <li v-for="(item, listIndex) in list" :key="listIndex" @click="cur1=listIndex" :class="cur1==listIndex ? 'active':''">{{item}}</li>
      </ul>
      <div class="list-content">
        <img src="@/assets/images/product_img1.jpg" alt />
        <div class="title">
          <h3>客厅/卧室/阳台/厨房/卫生间</h3>
          <p>
            质朴典雅的新中式风格与礼仪文化中的低调
            谦和相得益彰，既体现了业主对高雅精神境界的
            追求，又使得客人如沐春风。
          </p>
          <p>
            中式风格适合人群：性格沉稳、喜欢中国传
            统文化的人。
          </p>
          <div class="btn">立即预约</div>
        </div>
      </div>
    </div>
  </div>

  <div class="content3">
    <h2>装修流程</h2>
    <img src="@/assets/images/process_img.jpg" alt="">
  </div>

  <div class="content content4">
    <h2>八大空间轻奢配置</h2>
    <div class="content4-main">
      <div class="content4-left">
        <ul>
          <li v-for="(item, content4Index) in list1" :key="content4Index" @click="cur=content4Index" :class="cur == content4Index ? 'active': ''">{{item}}</li>
        </ul>
      </div>
      <div class="content4-right">
        <img v-show="content4RightIndex==cur" v-for="(item, content4RightIndex) in imgList" :key="content4RightIndex" :src="item" alt="">
      </div>
    </div>
  </div>

  <div class="content5">
    <h2>精英设计团队</h2>
    <div class="content5-content">
      <div class="content5-team">
        <div class="teamItemBox">
          <div class="team-item" v-for="(item, teamItemIndex) in teamList" :key="teamItemIndex" :style="{left: animate + 'px'}">
            <div class="item-content item-1">
              <p>{{item.linianDis}}</p>
              <span>{{item.linian}}</span>
            </div>
            <div class="item-content item-2">
              <p>{{item.xindeDis}}</p>
              <span>{{item.xinde}}</span>
            </div>
            <div class="item-content item-3">
              <p>{{item.dis}}</p>
              <span>{{item.name}}</span>
            </div>
            <div class="team-icon">
              <img :src="item.imgUrl" alt="">
            </div>
          </div>
        </div>

        <div class="btn">
          <div class="pre" @click="leftAction()">&lt;</div>
          <div class="next" @click="rightAction()">&gt;</div>
        </div>
      </div>

      <div class="content5-case">
        <h3>优秀设计案例</h3>
        <ul>
          <li class="item-case">
            <img src="@/assets/images/case_img1.jpg" alt="">
            <div class="case-dis">
              <p>户型:</p>
              <p>风格:</p>
            </div>
          </li>
          <li class="item-case">
            <img src="@/assets/images/case_img1.jpg" alt="">
            <div class="case-dis">
              <p>户型:</p>
              <p>风格:</p>
            </div>
          </li>
          <li class="item-case">
            <img src="@/assets/images/case_img1.jpg" alt="">
            <div class="case-dis">
              <p>户型:</p>
              <p>风格:</p>
            </div>
          </li>
          <li class="item-case">
            <img src="@/assets/images/case_img1.jpg" alt="">
            <div class="case-dis">
              <p>户型:</p>
              <p>风格:</p>
            </div>
          </li>
        </ul>
        <div class="content5-btn">
          <span class="more">查看更多案例</span>
          <span class="more">查看更多设计师</span>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      list: ["新中式风格", "现代黑白灰", "地中海风格", "简欧现代", "更多风格"],
      list1: ['客厅', '餐厅', '厨房', '卧室', '书房', '玄关', '衣帽间', '儿童房'],
      cur: 0,
      cur1: 0,
      cur2: 0,
      bannerHeight: 740,
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      imgList: [
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg'),
        require('@/assets/images/f_config1.jpg')
      ],
      teamList: [{
          name: '胡静',
          dis: '五年工作经验，擅长美式、北欧',
          xinde: '设计心得',
          xindeDis: '用心体验生活的点滴， 才能从细节中创造出更为舒适的居住环境。它是和谐的、有品质的、有生命力的。',
          linian: '设计理念',
          linianDis: '室内设计的首要目标在于满足客户生活的基本需要。简单的家居空间，通过设计更加富有艺术美感并同时改善生活空间的舒适度，让您十年后仍爱你的家。',
          imgUrl: require('@/assets/images/team/hj.jpg')
        },
        {
          name: '袁玲玲',
          dis: '五年工作经验，擅长地中海、轻奢',
          xinde: '设计心得',
          xindeDis: '用心体验生活的点滴， 才能从细节中创造出更为舒适的居住环境。它是和谐的、有品质的、有生命力的。',
          linian: '设计理念',
          linianDis: '设计不但要引领潮流、还要融入生活、设计灵感、是出自于生活但又高于生活的一种产物。',
          imgUrl: require('@/assets/images/team/yll.jpg')
        },
        {
          name: '周玉婷',
          dis: '三年工作经验，擅长新中式、简欧',
          xinde: '设计心得',
          xindeDis: '用心体验生活的点滴， 才能从细节中创造出更为舒适的居住环境。它是和谐的、有品质的、有生命力的。',
          linian: '设计理念',
          linianDis: '设计源于生活，生活因设计而改变！成就空间和谐，让设计物有所值，让细节缔造完美！',
          imgUrl: require('@/assets/images/team/zyt.jpg')
        },
        {
          name: '刘益明',
          dis: '二年工作经验，擅长轻奢、北欧',
          xinde: '设计心得',
          xindeDis: '用心体验生活的点滴， 才能从细节中创造出更为舒适的居住环境。它是和谐的、有品质的、有生命力的。',
          linian: '设计理念',
          linianDis: '以人为本；好的设计来自于对业主全方位的了解及沟通，只有基于人来思考设计，才能做出好的设计。',
          imgUrl: require('@/assets/images/team/lym.jpg')
        }
      ],
      animate: '0'
    };
  },

  components: {

  },

  computed: {

  },

  mounted() {},

  methods: {
    active: function (number) {
      this.cur2 = number;
      console.log(this.cur2);
    },
    rightAction() {
      var count = document.getElementsByClassName('team-item').length;
      // console.log(count);
      if (this.animate <= -(count - 1) * 900) {} else {
        this.animate -= 900;
      }
    },
    leftAction() {
      if (this.animate >= 0) {} else {
        this.animate += 900;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #efefef;
  width: 100%;
}

.flex {
  display: flex;
}

.content {
  margin: 0 auto;
  width: 1200px;

  h2 {
    text-align: center;
    color: #222;
    margin: 0 0 32px 0;
  }

  .f {
    background: #fff;
    width: 580px;

    .f-top {
      display: flex;
      margin: 18px 0 0 0;

      input:last-child {
        margin-right: 10px;
      }

      input {
        border: 1px solid #666;
        height: 52px;
        width: 280px;
        padding: 0 0 0 8px;
        margin: 0 0 0 10px;
      }
    }

    input {
      border: 1px solid #666;
      height: 52px;
      width: 550px;
      padding: 0 0 0 8px;
      margin: 14px 0 0 10px;
      display: block;
    }

    button {
      width: 300px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      background: #29498a;
      border: none;
      font-size: 16px;
      outline-style: none;
      margin: 18px auto 0;
      display: block;
    }

    button:hover {
      cursor: pointer;
    }
  }

  .content1-right,
  .content1-left {
    .content1-item {
      text-align: center;
      width: 300px;
      height: 160px;
      background: #fff;

      img {
        margin: 46px 0 0 0;
      }
    }

    .content1-item:hover {
      cursor: pointer;
    }
  }

  .content1-left {
    .content1-item {
      margin: 0 10px 10px 0;
    }
  }

  .content1-right {
    .content1-item {
      margin: 0 0 10px 10px;
    }
  }

}

.content2 {
  .list {
    ul {
      margin: 28px 0 20px 0;

      li {
        width: 232px;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        display: inline-block;
        background: #fff;
        text-align: center;
        margin: 0 10px 0 0;
        box-shadow: 1px 1px 5px #ddd;
        transition: all 0.3s ease-in;
      }

      li:hover {
        cursor: pointer;
      }

      li:last-child {
        margin-right: 0;
      }
    }

    .list-content {
      display: flex;
      position: relative;

      .title {
        height: 350px;
        width: 340px;
        position: absolute;
        background: #fff;
        right: 0;
        top: 56px;
        padding: 20px 15px;

        h3 {
          font-size: 18px;
          color: #29498a;
          line-height: 1.8;
          text-align: center;
          margin: 24px 0 12px 0;
        }

        p {
          font-size: 16px;
          line-height: 1.8;
          text-indent: 2em;
        }

        .btn {
          width: 220px;
          height: 60px;
          margin: 58px auto 0;
          background: #29498a;
          color: #fff;
          font-size: 18px;
          text-align: center;
          line-height: 60px;
        }

        .btn:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.content3 {
  background: #2a498a;
  padding: 44px 0 42px 0;
  margin: 32px 0 0 0;

  h2 {
    color: #fff;
    font-size: 22px;
    text-align: center;
    margin: 0 0 40px 0;
  }

  img {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
}

.content4-main {
  padding: 20px 16px;
  background: #fff;
  display: flex;

  .content4-left {
    ul {
      margin: 0 10px 0 0;

      li {
        width: 230px;
        height: 78px;
        line-height: 78px;
        background: #fff;
        text-align: center;
        margin: 6px 0 0 0;
        box-shadow: 1px 4px 8px -1px #ddd;
        transition: all 0.3s ease-in;
      }

      li:hover {
        cursor: pointer;
      }
    }
  }
}

.content5 {
  background: url("../assets/images/bg_img1.jpg") no-repeat;
  padding: 44px 0 42px 0;
  margin: 32px 0 0 0;

  h2 {
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin: 0 0 44px 0;
  }

  .content5-content {
    .content5-team {
      position: relative;

      .teamItemBox {
        width: 900px;
        overflow: hidden;
        display: flex;
        margin: 0 auto;

        .team-item {
          display: flex;
          min-width: 900px;
          height: auto;
          position: relative;
          transition: all .5s ease-in;

          .item-content {
            display: flex;
            margin: 44px 0 0 0;

            p,
            span {
              writing-mode: tb-rl;
              line-height: 1.8;
            }

            p {
              display: inline-block;
              min-width: 120px;
              max-height: 270px;
              color: #fff;
            }

            span {
              display: inline-block;
              background: #fff;
              width: 46px;
              height: 120px;
              text-align: center;
              line-height: 46px;
              margin: 0 0 0 18px;
            }
          }

          .team-icon {
            img {
              border-radius: 50%;
              margin: 20px 0 0 44px;
            }
          }

        }
      }

      .btn {
        opacity: 0;
        transition: all 0.3s ease-in;

        .pre,
        .next {
          font-size: 24px;
          background: #ddd;
          position: absolute;
          top: 45%;
          padding: 12px 16px;
          transition: all .3s ease-in;
        }

        .next:hover {
          background: #fff;
        }

        .pre:hover {
          background: #fff;
        }

        .pre {
          left: 20%;
        }

        .next {
          right: 20%;
        }
      }

    }

    .content5-team:hover .btn {
      opacity: 0.875;
      cursor: pointer;
    }

    .content5-case {
      h3 {
        color: #fff;
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        margin: 90px 0 54px 0;
      }

      h3::after,
      h3::before {
        content: '';
        width: 335px;
        height: 2px;
        margin: 0 18px 4px;
        background: #fff;
        display: inline-block;
      }

      ul {
        display: flex;
        justify-content: center;

        .item-case {
          width: 293px;
          height: 296px;
          background: #fff;
          margin: 0 6px 0 0;

          .case-dis {
            padding: 14px 20px;

            p {
              line-height: 1.6;
            }
          }
        }

        .item-case:last-child {
          margin-right: 0;
        }
      }

      .content5-btn {
        display: flex;
        justify-content: center;

        .more {
          width: 300px;
          height: 62px;
          background: #fff;
          display: inline-block;
          font-size: 20px;
          text-align: center;
          line-height: 62px;
          margin: 50px 40px 7px 0;
        }

        span:hover {
          cursor: pointer;
        }
      }
    }
  }

}

.active {
  background: #29498a !important;
  color: #fff;
}
</style>
