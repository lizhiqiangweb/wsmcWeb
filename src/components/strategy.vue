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
    <div class="content-box" v-for="(value, index) in item.contents.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
      <img :src="value.url" alt="">
      <div class="content-right">
        <h4>{{value.name}}</h4>
        <p>{{value.content}}</p>
        <span>{{value.date}}</span>
      </div>
    </div>
  </div>

  <div class="page">
    <el-pagination background layout="prev, pager, next" :pager-count="11" :total="all" @current-change="current_change"></el-pagination>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      bannerHeight: 740,
      currentPage: 1, //当前页码
      all: 0, //默认数据总数
      totalPage: 0, //当前条数
      pagesize: 4, //每页的数据显示条数
      banner: [
        require("@/assets/images/banner1.jpg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
      ],
      dataList: [{
          tit: '选购主材',
          contents: [{
              url: require('@/assets/images/strategy/zx-bgm.jpg'),
              name: '如何选购壁柜门？',
              content: '壁柜门主要用于卧室壁柜、活动室及厨房隔断等位置，具有装饰愉陛和实用性，分为推拉门(柜体门)、隔断门、柜体三类，其材质有板面、玻璃、藤艺.混合等，所需壁柜’刁或植体的面积需要厂家实地测量，安装时间在地板或墙砖安装完毕之后。',
              date: '2019.09.26'
            },
            {
              url: require('@/assets/images/strategy/zx-bz.jpg'),
              name: '如何选购壁纸？',
              content: '常用壁纸之一，所用塑料为聚氯乙烯(或聚乙烯).简称尸Vc塑料壁纸。塑料壁纸通常分为；普通壁纸.发泡壁纸等。普通壁纸用80克/平方米的纸作基材.涂塑100克/平方米左右的PVc糊状树脂，再经印花.压花而成.这种壁纸常分作平光印花、有光印花.单色压花、印花压花几种类型。',
              date: '2019.09.24'
            },
            {
              url: require('@/assets/images/strategy/zx-by.jpg'),
              name: '如何选购布艺？',
              content: '布艺装饰包括窗帘、布饰、沙发套.桌椅套等，也可以延伸到灯罩、门框.电话套、杯垫等的包边，布艺中的"布"是各种纤维品的总称，它不仅指布料、绸料、呢料等织物.而且还包括地毯、毛毡、花边等编织品以及绳带、挂毯、绢花等工艺制品。',
              date: '2019.09.24'
            },
            {
              url: require('@/assets/images/strategy/zx-cg.jpg'),
              name: '如何选购橱柜？',
              content: '橱柜的柜形分为吊柜、地柜.特殊柜形三大类其功能包括洗涤、料理.烹饪、存贮四种。1、吊柜以存贮为主，还经常会出现些装饰柜，比如玻璃门柜、酒柜、吊柜端头和圆头层板柜等等，在满足存贮功能的前提下.吊柜还会有丰富多彩的变化.来展现出每个厨房主人的不同个性。2、地柜也有存贮功能同时地柜中洗涤柜、料理柜和灶柜是必选件.洗涤柜.灶柜在料理柜左右灶柜上面正对着烟机柜。3、特殊柜用来解决厨房特殊问题。如高立柜，顶与吊柜上沿平齐内装高升拉蓝最能装东西；又如转角柜.安有2了0度合页.内装360度转蓝.能把角落的死区用活。',
              date: '2019.09.20'
            },
            {
              url: require('@/assets/images/strategy/zx-cd.jpg'),
              name: '如何选购床垫？',
              content: '随着物质文明和技术工艺的不断进步.现代人们使用的床垫种类逐渐趋向多元化，主要有弹簧床垫.棕榈床垫、乳胶床垫、水床垫.气床垫、磁床垫等.在这些床垫中.弹簧床垫占较大的比重。',
              date: '2019.09.18'
            },
            {
              url: require('@/assets/images/strategy/zx-cz.jpg'),
              name: '如何选购瓷砖？',
              content: '瓷砖按照使用功能分为夕对啬砖.地砖、墙砖、花片.腰线、广场砖和踢脚线砖等。按照制作工艺分为釉面砖、通体砖、抛光砖、玻化砖和陶瓷锦砖等。',
              date: '2019.09.11'
            },
            {
              url: require('@/assets/images/strategy/zx-db.jpg'),
              name: '如何选购地板？',
              content: '木地板是地面装饰的首选材料，由天然的木质材料加工而成。它具有独特的质感和纹理，弹性好，易清洁，不返潮，蓄热系数小，常用在起居室、卧室等。地板的分类：按木地板的结构和材料可分为实木地板、实木复合地板、强化复合地板、软木地板、竹地板这五大类。',
              date: '2019.09.10'
            },
            {
              url: require('@/assets/images/strategy/zx-ddcl.jpg'),
              name: '如何选购吊顶材料？',
              content: '吊顶是室内设计中经常采用的一种手法，人们的视线往往与它接触的时阍较多.因此吊顶的形状及艺术处理很明显地影响着空间效果。',
              date: '2019.09.06'
            },
            {
              url: require('@/assets/images/strategy/zx-jiaju.jpg'),
              name: '如何选购家具？',
              content: '家具的种类很多，按原料来划分，凡木质的通称木家具；主体是金属的通称金属家具(包括铝合金家具等)；凡塑料制成的通称为塑料家具；竹藤制成的通称竹藤家具；',
              date: '2019.08.27'
            },
            {
              url: require('@/assets/images/strategy/zx-lt.jpg'),
              name: '如何选购楼梯？',
              content: '为了上下楼的方便与舒适，楼梯需要个合理坡度楼梯的坡度，过陡就会不方便行走。要想轻松地拾级而上，就需要有一定的空间给楼梯个延伸的余地。所以，选择何种式样的楼梯，可能并不源自你最初的主观要求，空间的含量是不得不考虑的个重要因素。',
              date: '2019.08.24'
            },
            {
              url: require('@/assets/images/strategy/zx-sf.jpg'),
              name: '如何选购沙发？',
              content: '1、选择消费者满意或售后服务信得过的家居市场。2、要货比三家对同款式、同品牌的商品.要从质量、价格.服务等方面综合考虑。3、注意沙发面料的选择。不同场合使用的沙发，其面料也不尽相同.比如起居室布置的沙发，面料以质地较厚的绒类为佳看上去美观大方华丽而气派，另外皮革沙发也可作为起居室摆设用，使其具有豪华感。卧室布置沙发，面料的选择则以手感舒适的针织尼龙、长毛绒类织物为佳从而给人以舒适的感觉。',
              date: '2019.08.23'
            },
            {
              url: require('@/assets/images/strategy/zx-sgc.jpg'),
              name: '如何选购塑钢窗？',
              content: '塑钢门窗是新一代门窗材料，因其抗风压强度高，气密性水密性好，空气、雨水渗透量小，传热系数低，保温节能，隔音隔热，不易老化等优点，正在迅速取代钢窗、铝合金窗。塑钢门窗以硬聚氯乙烯(PVC)塑料型材为主材，加上五金件组成。为了增加型材的钢性，在塑料异型材内腔中填入抗拉弯作用的钢衬(力明虽筋)然后通过切割、钻孔、熔接等方法，制成窗框，所以称为塑钢窗。',
              date: '2019.08.14'
            },
            {
              url: require('@/assets/images/strategy/zx-yjzj.jpg'),
              name: '如何选购烟机灶具？',
              content: '首先，选购之前必须清楚自己所居住地区究竟使用哪一种燃气，家用燃气灶产品按照适用气源不同也分为相应的三大类：人工煤气、天然气和液化石油气其次，根据家庭的需求来确定安装台式或是嵌入式灶具。另外消费者要根据自己的生活习惯确定选购不同热负荷值的家用燃气灶，根据实际使用效果来看，消费者应选择单个炉头设计热负荷在3500W至4000W范围内的产品。',
              date: '2019.08.12'
            },
            {
              url: require('@/assets/images/strategy/zx-jieju.jpg'),
              name: '如何选择洁具？',
              content: '卫生洁具系指人们洗或洗涤用的器具，用于厕浴间和厨房，包括洗面器、坐便器、浴缸、洗涤槽等；洁具应具备排污彻底、冲刷面积大、噪音小、节水、表面佳、吸水率低的特点，主要有陶瓷、玻璃钢、塑料、人造大理石（玛瑙）、不锈钢等材质制成。',
              date: '2019.08.06'
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

  mounted() {
    this.all = (this.dataList[this.cur].contents.length) / 4 * 10;
  },
  methods: {
    current_change(currentPage) { //改变当前页
      this.currentPage = currentPage
    }
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

      img {
        width: 180px;
        height: 180px;
        display: block;
      }

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
