<template>
    <div>
       <div class='content'>
          <img src="https://cdn-app-icon.pgyer.com/0/b/1/1/7/0b117d2c7a83be327fa41ae7c889530e?x-oss-process=image/resize,m_lfit,h_120,w_120/format,jpg" alt="">
          <p>星云管理后台</p>
          <div class='detail'>
            <span>版本：1.6.7 (build 131) </span>
            <span>大小：29.3 MB</span>
            <span>更新时间：3 分钟前</span>
          </div>
          <div>
              <p>用手机扫描二维码安装</p>
              <img src="https://www.pgyer.com/app/qrcode/ZV6Z" alt="">
          </div>
       
       </div>   
    </div>
    
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
      //  onMounted(()=>{
           
      //  })
})
</script>

<style  lang='less'>
 .content{
     padding-top:200px;
     text-align: center;
     .detail{
         margin-bottom: 50px;
        span{
           padding:0 10px;
           color:rgb(158, 154, 154);
        }
        span:not(:last-child){
            border-right: 1px solid rgb(211, 209, 209);
        } 
     }
 }

</style>