<template>
    <div>
      <input
      style="margin: 10px"
      type="file"
      name="上传"
      id=""
      ref="uploadFile"
      @change="handleChange"
    />
    </div>
</template>
<script lang="ts">
// import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
// import  AppInfoParser from "app-info-parser";
 const AppInfoParser = require("app-info-parser/src/apk");
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
  },
  setup() {
    const handleChange = (info) => {
     const files = info.target.files[0]
      console.log("🌲🌲🌲",info)
     const parser = new AppInfoParser(files);
     parser.parse().then(res=>{
        console.log("🔥🔥",res,res.icon)
     })
     
    };
    return {
      handleChange,
      fileList: ref([]),
    };
  },
  
});
</script>

