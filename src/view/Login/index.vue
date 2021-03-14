
<template>
    <el-row :gutter="20">
  <el-col :span="8" :offset="8"><div class="grid-content bg-purple">
      <el-form  :model="userInfo" ref="userInfo" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="username"
    label="账号"
    
    :rules="[
      { required: true, message: '请输入账号', trigger: 'blur' }
    ]"
  >
    <el-input v-model="userInfo.username" ></el-input>
  </el-form-item>
   <el-form-item
    prop="password"
    label="密码"
    
    :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"
  >
    <el-input v-model="userInfo.password" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">登录</el-button>
    
  </el-form-item>

</el-form>
  </div></el-col>
</el-row>


</template>

<script lang='ts'>

interface userInfo {
    password:string,
    username:string
}
// 使用vue3语法
  export default{
   
    data() {
      return {
        userInfo: {
          password:'',
          username: ''
        } as userInfo
      };
    },
    methods: {
      submitForm() {
        // this.$refs[formName].validate((valid:Boolean) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        this.$refs['userInfo'].validate((valid:Boolean)=>{
              if(valid){
                   this.$router.push('/')
              }
        })
      //  this.$router.push('/')
      },
    
      removeDomain(item:any) {
        var index = this.userInfo.domains.indexOf(item)
        if (index !== -1) {
          this.userInfo.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.userInfo.domains.push({
         key: Date.now()
        });
      }
    }
  }
</script>

<style scoped>
html{
    width:100%;
    height: 100%;
    background: rgb(55, 190, 127);
}
/*

*/
.el-form-item{
   text-align: center;
}
.el-form-item__content{
   width:300px
}
.el-row{
  margin-top:300px
}

</style>
