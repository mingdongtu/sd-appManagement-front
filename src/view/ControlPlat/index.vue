<template>
  
  <a-table bordered :data-source="dataSource" :columns="columns">
    <template #application_name="{ text,record }">
      <div class="editable-cell">
       <img :src=record.application_logo alt="">
       <div>
          <p> {{text}}</p>
          <p>{{record.application_type}}</p>
       </div>
      </div>
    </template>
    <template #dowload_type='{record}'>
       <span  style='margin-right:5px'>  {{record.dowload_type}}</span>
      
        <a-popover placement="bottom">
        <template #content>
          <img style='width:100px;height:100px' src="https://www.pgyer.com/app/qrcode/agentBackendiOS" alt="">
        </template>
        <template #title>
          <span>扫描二维码下载</span>
        </template>

        <a href="" v-if='record.application_type=="Android"'> <AndroidOutlined/></a>
        <a href="" v-else> <AppleOutlined/></a>
      </a-popover>

    </template>
    <template #operation="{  }">
      <a-button type="primary" style="margin-right:10px">详情</a-button>
      <a-button type="primary">编辑</a-button>
    </template>
  </a-table>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref, UnwrapRef } from 'vue';
import {  AndroidOutlined,AppleOutlined} from '@ant-design/icons-vue';
import { cloneDeep } from 'lodash-es';

interface DataItem {
  key: string;
  application_name: string;
  edition: number;
  update_time: string;
  dowload_type:string;
  application_type:string;
  application_logo:string;
}

export default defineComponent({
  components: {
    AndroidOutlined,
    AppleOutlined
    
  },
  setup() {
    const columns = [
      {
        title: '应用名称',
        dataIndex: 'application_name',
        width: '30%',
        slots: { customRender: 'application_name' },
      },
      {
        title: '版本',
        dataIndex: 'edition',
      },
      {
        title: '下载方式',
        dataIndex: 'dowload_type',
        slots:{customRender:'dowload_type'}
      },
      {
        title: '更新时间',
        dataIndex: 'update_time',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        slots: { customRender: 'operation' },
      },
    ];
    const dataSource: Ref<DataItem[]> = ref([
      {
        key: '0',
        application_name: '合伙人APP',
        edition: 32,
        update_time: '2021/03/09',
        dowload_type:"pgyer.com/agentBackendiOS",
        application_type:'iOS',
        application_logo:'https://cdn-app-icon.pgyer.com/5/f/5/6/0/5f560d647888ec264657eb6ae073a44d?x-oss-process=image/resize,m_lfit,h_60,w_60/format,jpg'
      },
      {
        key: '1',
        application_name: '合伙人APP',
         edition: 33,
        update_time: '2021/03/10',
         dowload_type:"pgyer.com/agentBackendiOS",
          application_type:'Android',
            application_logo:'https://cdn-app-icon.pgyer.com/5/f/5/6/0/5f560d647888ec264657eb6ae073a44d?x-oss-process=image/resize,m_lfit,h_60,w_60/format,jpg'
      },
    ]);
    const count = computed(() => dataSource.value.length + 1);
    const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter(item => key === item.key)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };

  
    
    return {
      columns,
     
      dataSource,
      editableData,
      count,
      edit,
      save,
    };
  },
});
</script>
<style lang="less" scoped>
.editable-cell {
  position: relative;
 display: flex;
 align-items: center;
 img{
      margin-right:10px;
   }
    >div{
        display: flex;
        flex-direction: column;
        p{
           margin:0;
           font-size: 12px;
         }
         p:nth-of-type(1){
             margin-bottom: 5px;
          }
       }
  }

</style>
