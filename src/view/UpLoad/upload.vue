<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    method="post"
    action="http://localhost:8080/apm/upload"
    @change="handleChange"
    @beforeUpload="handleBeforeUpload"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">点击或者拖拽上传</p>
    <p class="ant-upload-hint">
      支持APK和IPA文件
    </p>
  </a-upload-dragger>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
// import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import axios from 'axios'

// interface FileItem {
//   uid: string;
//   name?: string;
//   status?: string;
//   response?: string;
//   url?: string;
// }

// interface FileInfo {
//   file: FileItem;
//   fileList: FileItem[];
// }

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const handleBeforeUpload = (file,fileList)=>{
          console.log("🔥🔥",file,fileList)
           return new Promise((resolve)=>{
                resolve(file)
           })
          // return true
    }
    const handleChange = (e) => {
    
       let formData = new FormData()
        formData.append('file', e.file)
         console.log('🔥🔥',formData,formData.has('file'))
        if(formData.has('file')){
           axios({
          method: 'post',
          url: '/apm/upload',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          data: formData
        }).then(res => {
          console.log('res', res)
        })

        }

    };
    return {
      handleChange,
      fileList: ref([]),
      handleBeforeUpload
    };
  },
});
</script>

