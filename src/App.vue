
  
<template>
<el-container style="height: 800px; border: 1px solid #eee">
<!-- 菜单栏-->
  <el-aside width="200px" style="background-color: rgb(44, 48, 58)">
    <el-menu 
     background-color='rgb(44, 48, 58)'
     text-color="#fff"
     active-text-color="#000"
     @select="handleSelect"
     >
      <el-menu-item index="首页"  style='color:#fff;width:200px' >
        <template #title ><i class="el-icon-s-home"></i>首页</template>
      </el-menu-item>
       <el-menu-item index="控制台" style='color:#fff;width:200px' >
        <template #title ><i class="el-icon-picture-outline-round"></i>控制台</template>
      </el-menu-item>
    <el-submenu index="1" >
        <template #title>
          <i class="el-icon-location"></i>
          <span>应用</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="合伙人APP" >合伙人APP</el-menu-item>
          <el-menu-item index="星云APP" >星云APP</el-menu-item>
           <el-menu-item index="IBO" >IBO</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
     
  </el-aside>
<!-- 顶部栏-->
  <el-container>
    <el-header style="text-align: right; font-size: 12px;height:56px;background:#fff">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>我的</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
              
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>图图</span>
    </el-header>
<!-- 主要内容区-->
    <el-main>
       <!-- 菜单打开标签页--> 
      <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab" >
        <el-tab-pane
          v-for="(item) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        
          <router-view></router-view>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <!--<el-footer>Footer</el-footer>-->
  </el-container>
   
</el-container>
</template>


<script lang='ts'>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        editableTabsValue: '2',
        editableTabs:[
        //   {
        //   title: 'Tab 1',
        //   name: '1',
        //   content: 'Tab 1 content'
        // }, {
        //   title: 'Tab 2',
        //   name: '2',
        //   content: 'Tab 2 content'
        // }
        ],
        tabIndex: 2
      }
    },
    methods:{
      handleSelect(index,indexPath){
        console.log('选中菜单',index,indexPath)
        // let newTabName = ++this.tabIndex + '';
        const isHas = this.editableTabs.some(item=>item.name===index)
        if(!isHas){
            this.editableTabs.push({
          title: index,
          name: index,
          content: 'New Tab content'
        }); 
        }
        
        this.editableTabsValue = index;
      },
     
      removeTab(targetName){
           this.editableTabs = this.editableTabs.filter(item=>item.name!==targetName)
      }
    }
  };
</script>


<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    background-color: rgb(44, 48, 58);
  }
  
</style>
