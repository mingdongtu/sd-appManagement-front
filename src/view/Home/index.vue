<template>
  <a-layout style="height:100vh">
    
    <a-layout>
      <a-layout-sider width="200" style="background: #fff" collapsible>
        <a-menu
          mode="inline"
          theme="dark"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
        <a-menu-item key="9" @click="handleHome">
          <BankOutlined/>
          <span>首页</span>
        </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <AppstoreOutlined />
                应用
              </span>
            </template>
            <a-menu-item key="1">合伙人APP</a-menu-item>
            <a-menu-item key="2">星云APP</a-menu-item>
            <a-menu-item key="3">GoGoHost</a-menu-item>
            <a-menu-item key="4">ChargeGoGo</a-menu-item>
          </a-sub-menu>
          
          
        </a-menu>
      </a-layout-sider>
      <a-layout >
        <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
         <a-row>
     <a-col :span="2" :offset="22">
      <SettingOutlined style="margin-right:20px" />
     <a-avatar>
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      </a-col>  
   </a-row>
       
      </a-layout-header>
        <a-layout-content
          :style="{ margin:'24px 16px',background: '#fff', padding: '24px', minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { BankOutlined,AppstoreOutlined,UserOutlined,SettingOutlined} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
        BankOutlined,
    AppstoreOutlined,
    UserOutlined,
    SettingOutlined
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
    };
  },
  methods:{
      handleHome(){
          this.$router.push('/control')
      }
  }
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
