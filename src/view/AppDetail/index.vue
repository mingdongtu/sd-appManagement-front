<template>
   <div>
   <a-layout class='detail-top'>
     <a-layout-header theme='light'  style="background:rgb(243,245,247);height:160px;padding:15px">
        <a-layout >
      <a-layout-content style="background:rgb(243,245,247)">
           <div class='detail-top-1'>
              
           </div>
      </a-layout-content>
      <a-layout-sider style="background:rgb(243,245,247)" theme="light" >Sider</a-layout-sider>
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
      <a>action</a>
    </template>
  </a-table>
   </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

const columns = [
  { title: '版本信息', width: 100, dataIndex: 'edition_detail', key: 'edition_detail', fixed: 'left' },
  { title: 'Build', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: '更新描述', dataIndex: 'address', key: '1', width: 150 },
  { title: '下载次数', dataIndex: 'address', key: '2', width: 150 },
  { title: '大小', dataIndex: 'address', key: '3', width: 150 },
  { title: '状态', dataIndex: 'address', key: '4', width: 150 },
  { title: '状态', dataIndex: 'address', key: '5', width: 150 },
  { title: '更新时间', dataIndex: 'address', key: '6', width: 150 },
  { title: '审核状态', dataIndex: 'address', key: '7', width: 150 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: { customRender: 'action' },
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default defineComponent({
  data() {
    return {
      data,
      columns,
    };
  },
});
</script>

<style scoped>
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
</style>