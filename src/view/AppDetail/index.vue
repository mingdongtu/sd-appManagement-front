<template>
   <div>
   <a-layout class='detail-top'>
     <a-layout-header theme='light'  style="background:rgb(243,245,247);height:160px;padding:15px">
        <a-layout >
      <a-layout-content style="background:rgb(243,245,247)">
           <div class='detail-top-1'>
              <img  src="https://cdn-app-icon.pgyer.com/5/f/5/6/0/5f560d647888ec264657eb6ae073a44d?x-oss-process=image/resize,m_lfit,h_120,w_120/format,jpg" alt="">
              <div>
                 <div><span>{{detail.application_name}}</span><span>内测版</span><FormOutlined style='font-size:12px' /></div>
                 <div><AppleOutlined/> <span>适用于{{detail.application_name}}设备</span></div>
                 <p>Bundle ID:{{'com.soudian.AgentBackends'}}</p>
              </div>
           </div>
      </a-layout-content>
      <a-layout-sider  style="background:rgb(243,245,247);margin-top:20px" theme="light" >
              <a-button @click="handleUpdate" type="primary" shape="round" :size="size">
            <template #icon>
            <RedoOutlined />
            更新
          </template>
        </a-button>
      </a-layout-sider>
    </a-layout>
     </a-layout-header>
      <a-descriptions  bordered >
    <a-descriptions-item label="App Key">c721e050e6da08d4f9a9d325b38dd4a7</a-descriptions-item>
    <a-descriptions-item label="应用介绍与更新说明">查看详情</a-descriptions-item>
    <a-descriptions-item label="过期时间">2023-03-15</a-descriptions-item>
    <a-descriptions-item label="安装方式">公开 ( 长期有效 )</a-descriptions-item>
    <a-descriptions-item label="下载地址">pgyer.com/agentBackendiOS</a-descriptions-item>
    <a-descriptions-item label="下载二维码">
         <div class='size'>
             <img style="width:30px;height:30px" src="https://www.pgyer.com/app/qrcode/agentBackendiOS" alt="">
            <a style="font-size:12px;display:block;margin-top:12px">下载更多尺寸</a>
         </div>
    </a-descriptions-item>
  </a-descriptions>
    </a-layout>
  <p>版本信息</p>
 <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
   
  
    <template #action>
     <a-tooltip placement="topLeft">
        <template #title>
          <span>编辑</span>
        </template>
        <a-button size="small" style='margin-right:5px'><EditFilled /></a-button>
      </a-tooltip>
     <a-tooltip placement="topLeft">
        <template #title>
          <span>下载</span>
        </template>
        <a-button size="small" style='margin-right:5px'><DownloadOutlined /></a-button>
      </a-tooltip>
      
      <a-tooltip placement="topLeft">
        <template #title>
          <span>证书信息</span>
        </template>
        <a-button size="small" style='margin-right:5px'><BookOutlined /></a-button>
      </a-tooltip>
       <a-tooltip placement="topLeft">
        <template #title>
          <span>重签名</span>
        </template>
        <a-button size="small" ><FormOutlined /></a-button>
      </a-tooltip>
       <a-tooltip placement="topLeft">
        <template #title>
          <span>删除</span>
        </template>
        <a-button size="small" style='margin-right:5px' ><ClearOutlined /></a-button>
      </a-tooltip>
      
    </template>
  </a-table>
   </div>
</template>
<script lang='ts'>
import { defineComponent,onMounted,Ref,ref} from 'vue';
import axios from "axios";
import { DownloadOutlined,EditFilled,FormOutlined,ClearOutlined,BookOutlined,AppleOutlined,RedoOutlined} from '@ant-design/icons-vue';

interface DataItem {
  key: number;
    edition:string,
    build_count: Number,
    // update_describetion: string,
    download_count:Number,
    package_volume:Number,
    // status:string,
    update_time:string,
    check_status:string
}
interface detailInfo{
      application_name:string;
      application_type:string;
      application_logo:string;

}



export default defineComponent({
   components: {
        DownloadOutlined,
        EditFilled,
        FormOutlined,
        ClearOutlined,
        BookOutlined,
        AppleOutlined,
        RedoOutlined
  },
  setup(){
    const columns = [
  { title: '版本信息', width: 100, dataIndex: 'edition', key: 'edition', fixed: 'left' },
  { title: 'Build', width: 100, dataIndex: 'build_count', key: 'build_count', fixed: 'left' },
  // { title: '更新描述', dataIndex: 'update_describetion', key: '1', width: 200 },
  { title: '下载次数', dataIndex: 'download_count', key: '2', width: 100 },
  { title: '大小', dataIndex: 'package_volume', key: '3', width: 100 },
  // { title: '状态', dataIndex: 'status', key: '4', width: 100 },
  { title: '更新时间', dataIndex: 'update_time', key: '6', width: 150 },
  { title: '审核状态', dataIndex: 'check_status', key: '7', width: 100 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 220,
    slots: { customRender: 'action' },
  },
];
   let detail:Ref<detailInfo> = ref({
       application_name:'',
       application_type:'',
       application_logo:''
   });

    let data: Ref<DataItem[]> = ref([]);
     
      onMounted(()=>{
           axios.get("/apm/appDetail").then(res=>{
                console.log(res)
                data.value = res.data.list || []
                detail.value = res.data.detail||{}
           })
      })
      return {
         data,
         columns,
         detail
      }
  },
  
  methods:{
     handleUpdate(){
          this.$router.push('/upLoad')
     }
  }
});
</script>

<style scoped lang='less'>
.ant-layout-header{
   line-height: 30px;
}
.ant-layout-content{
  padding:0
}
.detail-top{
     height: 320px;
     background: #fff;
}
.size{
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items: center;
}
.detail-top-1{
  
    img{
       margin-right: 20px;
       width:70px;
   height:70px;
   border-radius:5px
    }
    >div{
       vertical-align: top;
       display: inline-block;
       >div:nth-of-type(1){
          display: flex;
           
          align-items: center;
          >span:nth-of-type(2){
            margin:0 10px;
            display: inline-block;
            
            font-size: 12px;
          }
       }
    }
}
</style>