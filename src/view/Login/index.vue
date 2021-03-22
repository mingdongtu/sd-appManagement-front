<template>

    <a-layout  class='main'>
    <a-layout-content>
    <a-row>
      <a-col :span="8" :offset="8">
      <a-form
        name="custom-validation"
        ref="formRef"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item  has-feedback label="用户"  style="color:#fff" name="username">
          <a-input    autocomplete="off"  v-model:value="formState.username"  />
        </a-form-item>
        <a-form-item  has-feedback label="密码" name="password">
          <a-input   type="password"  v-model:value="formState.password" autocomplete="off"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 9 }" >
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
       </a-col>
        </a-row>
      </a-layout-content>
      </a-layout>
</template>
<script lang="ts">
import { RuleObject } from 'ant-design-vue/es/form/interface';
// import { useForm } from '@ant-design-vue/use';
import { defineComponent, reactive, ref,UnwrapRef } from 'vue';
import qs from "qs"
interface FormState {
  username: string;
  password: string;
}
// interface resData{
//      code:number,
//      data:{},
//      msg:string
// }
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState>=reactive({
      username: '',
      password: ''
    });
 
    // 用户名校验
    let validateUsername = async (rule: RuleObject, value: string) => {
     
      if (value === '') {
        return Promise.reject('请输入用户名');
      } else {
        // if (formState.username !== '') {
        //   formRef.value.validateField('username');
        // }
        return Promise.resolve();
      }
    };
    //密码校验
    let validatePassword = async (rule: RuleObject, value: string) => {
    if (value === '') {
        return Promise.reject('请输入密码');
      } else {
        // if (formState.password !== '') {
        //   formRef.value.validateField('password');
        // }
        return Promise.resolve();
      }
    };
//校验规则
    const rules = {
      username: [{ validator: validateUsername, trigger: 'change' }],
      password: [{ validator: validatePassword, trigger: 'change' }]
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
  
    return {
      formState,
      formRef,
      rules,
      layout,
      
    };
  },
  methods:{
      handleFinish(values: FormState){
         console.log("开始登录请求",values); 
         const params = qs.stringify(values)
         this.axios.get(`/apm/login?${params}`).then((res:any)=>{
              console.log('返回数据',res)
              if(res&&res.code===1){ // 登录失败
                    this.$router.push("/control")
              }
         })
      }
  }
});
</script>

<style scoped>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
.ant-layout{
   height: 100Vh;
 }
 .ant-layout-content{
    margin-top:300px
  }
  .ant-form-item-control{
   width:300px}
   .main{
      width:100vw;
    height:100vh;
    background-size:100% 100%;
    
   }


</style>

