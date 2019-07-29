<template>
<div id="app">
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "@/assembly/header";
import Footer from "@/assembly/footer";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.content {
  width: 1200px;
  margin: 0 auto;
  padding: 46px 0 0 0;
}

.el-pager li {
  background-color: #fff !important;
}
.el-pagination .el-pager .active {
  background-color: #2a498a !important;
}
</style>
