<template>
   <div>
   <a-layout class='detail-top'>
     <a-layout-header theme='light'  style="background:rgb(243,245,247);height:160px;padding:15px">
        <a-layout >
      <a-layout-content style="background:rgb(243,245,247)">
           <div class='detail-top-1'>
              <img  src="https://cdn-app-icon.pgyer.com/5/f/5/6/0/5f560d647888ec264657eb6ae073a44d?x-oss-process=image/resize,m_lfit,h_120,w_120/format,jpg" alt="">
              <div>
                 <div><span>搜电合伙人</span><span>内测版</span><FormOutlined style='font-size:12px' /></div>
                 <div><AppleOutlined/> <span>适用于ios设备</span></div>
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
import { defineComponent } from 'vue';
import { DownloadOutlined,EditFilled,FormOutlined,ClearOutlined,BookOutlined,AppleOutlined,RedoOutlined} from '@ant-design/icons-vue';
const columns = [
  { title: '版本信息', width: 100, dataIndex: 'edition_detail', key: 'edition_detail', fixed: 'left' },
  { title: 'Build', width: 100, dataIndex: 'build_count', key: 'build_count', fixed: 'left' },
  { title: '更新描述', dataIndex: 'update_describetion', key: '1', width: 200 },
  { title: '下载次数', dataIndex: 'download_count', key: '2', width: 100 },
  { title: '大小', dataIndex: 'packge_volume', key: '3', width: 100 },
  { title: '状态', dataIndex: 'status', key: '4', width: 100 },
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

interface DataItem {
  key: number;
    edition_detail:string,
    build_count: Number,
    update_describetion: string,
    download_count:Number,
    packge_volume:Number,
    status:string,
    update_time:string,
    check_status:string
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    edition_detail: `Edrward ${i}`,
    build_count: 32,
    update_describetion: `London Park no. ${i}`,
    download_count:10,
    packge_volume:37.5,
    status:"显示",
    update_time:"2021-03-15 11：49",
    check_status:"已通过"

  });
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
  data() {
    return {
      data,
      columns,
    };
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