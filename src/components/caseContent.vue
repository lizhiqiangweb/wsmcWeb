<!--  -->
<template>
<div class="caseContent">
  <div class="swiper">
    <el-carousel :interval="5000" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" alt="" ref="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content" v-for="(item, index) in dataList" v-show="item.id==showItem" :key="index">
    <div class=" top">
      <h3>{{item.tit}}</h3>
      <p>{{item.dis}}</p>
    </div>
    <div class=" dis">
      <img :src="item.mainImg" alt="">
      <div class="myselfDis">
        <img :src="item.myselfDis.myselfImg" alt="">
        <h4>{{item.myselfDis.name}}</h4>
        <p>从业年限：<span>{{item.myselfDis.workAge}}</span></p>
        <p>擅长风格：<span>{{item.myselfDis.style}}</span></p>
        <p>设计理念：<span>{{item.myselfDis.linian}}</span></p>
      </div>
    </div>
    <div class=" homeDis">
      <ul>
        <li>案例风格：</li><span>{{item.homeDis.style}}</span>
        <li>案例面积：</li><span>{{item.homeDis.area}}</span>
        <li>所在城市：</li><span>{{item.homeDis.city}}</span>
      </ul>
      <ul>
        <li>案例户型：</li><span>{{item.homeDis.apartment}}</span>
        <li>楼盘名称：</li><span>{{item.homeDis.name}}</span>
        <li>案例造价：</li><span>{{item.homeDis.price}}</span>
      </ul>
    </div>

    <div class="content content-main">
      <img :src="item.contentMain.imgUrl" alt="">
      <p v-for="(item1, i) in item.contentMain.content" :key="i">{{item1}}</p>
    </div>

    <div class="content-item" v-for="(item2, index1) in item.contentItem" :key="index1">
      <h4><span>△</span> {{item2.tit}}</h4>
      <img :src="item2.imgUrl1" alt="">
      <p v-for="(item3, index3) in item2.content" :key="index3">{{item3}}</p>
      <img :src="item2.imgUrl2" alt="">
    </div>

  </div>

  <div class="caseContent-main">
    <img src="" alt="">
    <p></p>
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
      showItem: '',
      dataList: [{
          id: 'bo1',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '二居 欧式 80-100㎡',
          mainImg: require('@/assets/images/case/bo/1/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '80-100㎡',
            city: '长沙',
            apartment: '二居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: require('@/assets/images/case/bo/1/main.jpg'),
            content: [
              '北欧风格以简洁、自然、人性化为主导；',
              '简约风格是将设计的元素、色彩、照明、原材料简化到最少的程度；',
              '但其色彩、材料的总体搭配要求又尤为突出。',
              '北欧风格简洁、现代,以浅色为代表,整体感舒适自然,突出的人性化特性颇受现在年轻人的喜爱。'
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/1/1.jpg'),
              imgUrl2: require('@/assets/images/case/bo/1/2.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '主卧',
              imgUrl1: require('@/assets/images/case/bo/1/3.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            },
            {
              tit: '次卧',
              imgUrl1: require('@/assets/images/case/bo/1/4.jpg'),
              content: [
                '整体客厅以布艺为主，色彩的总体搭配也是极其简约。',
                '白色的地板砖上铺置浅色调地毯，绿色的电视背景墙搭配客厅内的所有绿色植物和绿色装修配饰品，整个空间融为一体，显得格外宽敞。',
                '布艺的沙发选择的是黄色与电视柜的实木色调保持一致，同时茶几支架选用黄色不锈钢，上面以白色石材板铺置。从整个客厅来说，将简约的色调搭配的出神入化。'
              ]
            }
          ]
        },
        {
          id: 'bo2',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '三居 欧式 100-140㎡',
          mainImg: require('@/assets/images/case/bo/2/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '100-140㎡',
            city: '长沙',
            apartment: '三居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: require('@/assets/images/case/bo/2/main.jpg'),
            content: [
              '整个设计属于北欧风格中带点极简风格的装修，整个装修的室内到外景再优化到室内软装，完全将北欧风发挥到极致。',
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/2/1.jpg'),
              imgUrl2: require('@/assets/images/case/bo/2/2.jpg'),
              content: [
                '从视野上看，整个房子的视野相当开阔，大面积的窗台视觉上给人一种简洁的韵味，不仅满足于采光性好的要求，也是使得空间有了很好的延伸感。',
                '在整个大的客厅当中，选用实木的地板搭配上灰白为主的整体家装，几幅装饰的壁画，瞬间给家一种充满艺术的气息，非常实用。',
              ]
            },
            {
              tit: '主卧',
              imgUrl1: require('@/assets/images/case/bo/2/6.jpg'),
              content: [
                '主卧的采光性非常重要，而当前整个房间的采光性能极佳。木饰面的地板和书桌融为一体。',
                '墙面、木饰面、床铺的三种色系搭配，实现了主卧的优雅外观。',
              ]
            },
            {
              tit: '儿童房',
              imgUrl1: require('@/assets/images/case/bo/2/7.jpg'),
              content: [
                '儿童房采用上下铺的形式，不但可以满足两个小朋友都会有自己独立的空间，而且使两个小朋友更加的亲密；',
                '在床头背景墙上也是采用了拼接色彩的方式，使得整个房间给人一种温暖舒服的感觉；',
                '上下铺的床头柜都可以用来放置一些小玩具或者书籍之类的，方便而且有设计感；'
              ]
            },
            {
              tit: '厨房',
              imgUrl1: require('@/assets/images/case/bo/2/5.jpg'),
              content: [
                '厨房L字造型，厨房的操作台设计的高度严格的根据需求的高度进行设计，方便了厨房日常工作的操作。',
                '总体的浅灰色和浅蓝色色调给人一种清爽的感觉，厨房的设计也减少了许多不必要的装饰线条。',
              ]
            },
            {
              tit: '餐厅',
              imgUrl1: require('@/assets/images/case/bo/2/4.jpg'),
              content: [
                '走进小客厅，淡蓝色的橱柜，黄色实木地板的餐桌和坐椅，纯白的墙壁。简简单单的三个颜色，让整个小客厅层次感分明。小餐厅的装修配饰品的选用同样极为讲究；',
              ]
            }
          ]
        },
        {
          id: 'bo3',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '二居 欧式 80-120㎡',
          mainImg: require('@/assets/images/case/bo/3/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '80-120㎡',
            city: '长沙',
            apartment: '二居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: require('@/assets/images/case/bo/3/main.jpg'),
            content: [
              '整个设计属于北欧风格中带点极简风格的装修，整个装修的室内到外景再优化到室内软装，完全将北欧风发挥到极致。',
            ]
          },
          contentItem: [{
              tit: '餐厅',
              imgUrl1: require('@/assets/images/case/bo/3/2.jpg'),
              imgUrl2: require('@/assets/images/case/bo/3/3.jpg'),
              content: [
                '餐厅位置刚刚好够用，餐厅的设计以几何图形布局作为整个空间平衡和谐的支点，方正餐桌、圆盘方巾，硬朗的线条、活泼的时尚色彩，以及带有温馨的木质感的餐桌，空间通透明亮。',
                '设计师把餐厅旁边的多功能区做了整面推拉门，在有朋友来访的时候,餐桌的形式可以变成聚会形式，把多功能区的面积纳入餐厅。平时多功能区域推拉门打开的情况下，也是纳入到客餐厅区域的面积，这样把公共区域做到最大的舒适化。',
              ]
            },
            {
              tit: '儿童房',
              imgUrl1: require('@/assets/images/case/bo/3/4.jpg'),
              content: [
                '设计师以几何图形为契机打开浪漫童趣的口子，活泼色调层叠入眼，守护干净的童心，在色彩中找寻平衡，在色块的排列中重塑秩序，在图案生动、布局颠倒的世界里，欣欣然，生长出自由的姿态。',
              ]
            },
            {
              tit: '入户',
              imgUrl1: require('@/assets/images/case/bo/3/5.jpg'),
              content: [
                '玄关采用大色块几何给生活定调，有换鞋凳和鞋柜，北欧风格主打实用性，所以收纳功能挪到了门厅的一排橱柜上，吸盘挂钩代替了包包和衣服的支架，把其余空间让给试衣镜。',
              ]
            },
            {
              tit: '卧室',
              imgUrl1: require('@/assets/images/case/bo/3/6.jpg'),
              content: [
                ' 设计师在卧室功能性考量上，以清新色调弱化主体饱和度，格子元素在素雅空间碰撞出活力。几何肌理，高低错落，静雅的空间不失趣味，柔和光线倾泻入室洋洋洒洒，一室好眠。',
              ]
            },
            {
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/3/1.jpg'),
              content: [
                '客厅开间有限。于是我们把靠客厅的一半阳台纳入到客厅的面积，角落树形优美的绿植,给家居撕开了温暖的一道口，编织毯随意地搭在沙发上，纯白的落地窗，白日里窗明几净，傍晚时静待月光入室。',
              ]
            }
          ]
        },
        {
          id: 'bo4',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '三居 欧式 120-140㎡',
          mainImg: require('@/assets/images/case/bo/4/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '120-140㎡',
            city: '长沙',
            apartment: '三居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: '',
            content: [
              '',
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/4/1.jpg'),
              content: [
                '客厅的L形沙发都是木工定制的，沙发后是悬空的，沙发墙取消后，构成了一个有意思的生活伏笔。另一边的电视柜上可以摆放一些照片，比如有关家人的珍贵瞬间。',
                '客厅沙发淡雅清新的主色调，更添宁静雅致的休憩氛围，结束一天的繁忙工作后回到家，和家人窝在沙发看一场喜欢的电影，放几首喜欢的音乐，脱离世界的喧嚣，只享受此刻的生活。',
              ]
            },
            {
              tit: '餐厅',
              imgUrl1: require('@/assets/images/case/bo/4/2.jpg'),
              content: [
                '一眼望去餐桌上的多肉植物注入生机，把生活的点滴之美镶嵌在空间物品中，尊重灵魂与空间的对话，以自然之形抒发现代之意。认认真真陪在家人身边吃每一顿饭。',
              ]
            },
            {
              tit: '卧室',
              imgUrl1: require('@/assets/images/case/bo/4/3.jpg'),
              content: [
                '背景墙以一串简单的英文字符做点缀，不宣扬的粉色调很适合每一个温柔的梦。',
                '卧室里落地窗迎接着自然界的光与新鲜空气，拉开粉紫色的窗帘将隐约美景引入室内，营造清新自然的生活气息，又与层次感互相呼应，空间一览无遗。让不同质感于室内汇聚，空间特点显得更为强烈。',
              ]
            },
            {
              tit: '入户',
              imgUrl1: require('@/assets/images/case/bo/4/4.jpg'),
              content: [
                '玄关进门后，对着原木餐桌，地面是同材质的木地板融为一体，显得雅致而文艺舒适。有奔波之后回家可以坐着换鞋的软乎乎的沙发，到家就希望你解放疲惫的身躯，简单的一盏吊灯让你一进门就不自觉卸下了一身疲倦。',
                '入户门处餐桌旁的储物柜做了凹口的设计，让零碎的小物件或鲜花绿植有场地安放，给空间提升高级感。',
              ]
            },
            {
              tit: '书房',
              imgUrl1: require('@/assets/images/case/bo/4/5.jpg'),
              content: [
                '竖立式的实木书柜表达出很好的视觉效果，内部小格的划分可以分类放一些雕塑品以及小盆栽，将现代社会的产物以装饰品的形式表现，增加文学气息的同时给空间增添了艺术气息，拼凑出现代、时尚、舒适的艺术空间。',
                '空间的分配恰到好处，白色分隔层横行铺满，线条、墙面与色彩的交织，成就经典之作。',
              ]
            }
          ]
        },
        {
          id: 'bo5',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '三居 欧式 120-140㎡',
          mainImg: require('@/assets/images/case/bo/5/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '120-140㎡',
            city: '长沙',
            apartment: '三居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: '',
            content: [
              '北欧极简风格具备初见乍欢，久处怦然的魅力，本套设计从简约的品味到流行，从华丽的外装到优雅的外表，给人一种触目所及十分清爽的既视感。',
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/5/1.jpg'),
              content: [
                '整个大客厅的空间视野极其开阔，整个客厅的采光性颇佳，空间内动线明确，敞开的客餐厅都非常的独立，井然有序且层次分明，采用的是自然系的精致北欧风格设计，每一处都有着艺术的气息。',
                '室内的盆栽、挂画、艺术灯等都保持协调的充当了客厅装饰品。',
              ]
            },
            {
              tit: '餐厅',
              imgUrl1: require('@/assets/images/case/bo/5/3.jpg'),
              content: [
                '餐厅一样的简约时尚，餐桌采用的是灰色石板餐桌，搭配了皮质软椅作为点缀，不同颜色的搭配更是很有特点，大面积的白色墙面下，搭配了着装饰画更是起到了点睛的作用，艺术灯的别致造型衬托出整个风格，不需要复杂的造型，也能感受到设计的精致。',
              ]
            },
            {
              tit: '厨房',
              imgUrl1: require('@/assets/images/case/bo/5/4.jpg'),
              content: [
                '厨房的设计十分精简，米黄色的地板砖、花色石板炤台、黑色镶嵌式电磁炉、咖啡色橱柜，简简单单的几种色调把整个厨房的功能全部涵盖，体现出北欧风格不一样的特色。',
              ]
            },
            {
              tit: '主卧',
              imgUrl1: require('@/assets/images/case/bo/5/5.jpg'),
              content: [
                '进入卧室，没有了多余的造型，恬静暗色调的家装体系受到家装设计的青睐，这种色系会让整个空间都很温馨，并且与白色的搭配对比也非常的具有特点。',
                '在家具的选择方面，还是要以简约舒适为主的北欧风格，原木材质是必不可少的，首先在舒适的卧室空间里，原木材质的质感可以让卧室更加的具有自然的气息，而在中和了两种颜色对比的前提下，也让整个空间更加的协调。 ',
              ]
            },
            {
              tit: '卫生间',
              imgUrl1: require('@/assets/images/case/bo/5/6.jpg'),
              content: [
                '洗手间的墙壁采用了深蓝色的设计，白色与深蓝的衔接带给人的视觉冲击十分明显，巧妙避免的单色的压抑感。',
              ]
            }
          ]
        },
        {
          id: 'bo6',
          tit: '北欧住宅，演绎纯净与奢华',
          dis: '三居 欧式 120-140㎡',
          mainImg: require('@/assets/images/case/bo/6/main.jpg'),
          myselfDis: {
            myselfImg: require('@/assets/images/team/hj.jpg'),
            name: '胡静',
            workAge: '3年',
            style: '北欧之光，北美阳光，爱情海洋',
            linian: '让设计与生活互动'
          },
          homeDis: {
            style: '北欧',
            area: '120-140㎡',
            city: '长沙',
            apartment: '三居',
            name: '',
            price: ''
          },
          contentMain: {
            imgUrl: '',
            content: [
              '',
            ]
          },
          contentItem: [{
              tit: '客厅',
              imgUrl1: require('@/assets/images/case/bo/6/1.jpg'),
              imgUrl2: require('@/assets/images/case/bo/6/2.jpg'),
              content: [
                '客厅利用大色块造型几何给生活定调，墙上挂画如海浪抚过，一别手绘质感所传递的粗犷，温柔地梳开细密的纹理。',
                '角落的地灯给家居撕开了温暖的一道口，编织毯随意地搭在皮椅上，傍晚的成都，温一壶暖茶，静待月光入室。'
              ]
            },
            {
              tit: '餐厅',
              imgUrl1: require('@/assets/images/case/bo/6/4.jpg'),
              content: [
                '《呐喊》画面以桥梁作分割，旋转的世界铺天盖地吞噬，笔直的木板桥沿着蜡笔画线遥遥延伸至远处，尖叫声从喉咙划破直出。',
                '餐厅的设计以此为灵感，翘起不平衡的支点，金沙蓝海交叠中，河流脉络'
              ]
            },
            {
              tit: '卧室',
              imgUrl1: require('@/assets/images/case/bo/6/6.jpg'),
              content: [
                '薄翼金蝉，环星明灯，我们的设计团队在卧室功能性考量上，以浅色调弱化主体饱和度，点缀的亮色元素在素雅空间碰撞出活力。几何肌理，高低错落，静雅的空间不失趣味，清风曼纱，一室好眠。',
              ]
            },
            {
              tit: '儿童房',
              imgUrl1: require('@/assets/images/case/bo/6/7.jpg'),
              content: [
                '象征新生的粉色层叠入眼，儿童房的设计守护一颗纯净的少女心。云朵连绵，如墙面的绣画，在阳光的折射下，天光云影，接连一色。',
              ]
            }
          ]
        }

      ]
    };
  },

  components: {},

  computed: {},

  methods: {},

  created() {
    var id = this.$route.query.case;
    this.showItem = id;
    console.log(this.showItem);
  },
}
</script>

<style lang="scss" scoped>
P {
  color: #333;
}

.caseContent {
  .content {
    img {
      max-width: 1200px;
      height: auto;
    }

    .top {
      p {
        margin: 18px 0 26px 0;
      }
    }

    .dis {
      display: flex;

      img {
        width: 765px;
        height: 574px;
      }

      .myselfDis {
        padding: 22px 14px 14px 14px;
        margin: 0 0 0 28px;
        border: 1px solid #111;

        img {
          width: 375px;
          height: 375px;
        }

        h4 {
          line-height: 2.4;
        }

        p {
          line-height: 2.4;
          color: #333;
        }
      }

    }

    .homeDis {
      margin: 28px 0 0 0;

      ul {
        display: flex;
        border-top: 1px solid #999;
        border-left: 1px solid #999;
        border-right: 1px solid #999;

        li {
          width: 150px;
          height: 75px;
          line-height: 75px;
          background: #c9c9c9;
          text-align: center;
        }

        span {
          display: inline-block;
          width: 250px;
          height: 75px;
          line-height: 75px;
          text-align: center;
        }
      }

      ul:last-child {
        border-bottom: 1px solid #999;

      }
    }

    .content-main {
      img {
        display: block;
        margin: 0 auto 28px;
      }

      p {
        text-align: center;
        line-height: 2;
      }
    }

    .content-item {
      h4 {
        margin: 30px 0 0 0;
        font-size: 18px;
      }

      img {
        display: block;
        margin: 22px auto 28px;
      }

      p {
        text-align: center;
        line-height: 2;
      }
    }
  }

}
</style>
