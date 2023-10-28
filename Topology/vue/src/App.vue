<template>
     <div>
    <iframe :src="iframeSrc" width="100%" height="900px"></iframe>
    <button @click="fetchData">跳转</button>
    <p>{{ date }}</p>
  </div>
</template>
<script>
import $ from 'jquery';
 export default {
  data() {
    return {
      date : '',
      iframeSrc: './jtopo_topology-master/network_topology.html'
    }
  },
  methods: {
    aaa: function()
    {
        console.log(this.date)
    },
    fetchData: function() {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/getTopology",
        contentType: "text/plain",
        success: (response) => {
      // 在这里处理你的数据
      this.date = response.split(" ");
      console.log(response.split(" "));
    },
        error: function() {
          alert('服务器异常，请稍后重试..');
          console.log("1111");
        },
      });
    }
  },
  // mounted() {
  //   this.fetchData();  
  // }

}
</script>

<style>
    /* @import "static/layui-2.3.0/css/layui.css";
    @import "static/font-awesome-4.7.0/css/font-awesome.min.css";
    @import "static/jtopo/css/jtopo-editor.css"; */
</style>
