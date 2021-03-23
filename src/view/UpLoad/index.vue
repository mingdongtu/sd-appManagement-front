<template>
   <div>
      <UpLoad/>  
   </div>
</template>

<script lang="ts">
import  UpLoad from './upload.vue';
import { defineComponent,ref } from 'vue';

     export default defineComponent({
           components:{
               UpLoad

           },
           setup(){
                const isUploaded = ref(false)
                return {
                    isUploaded
                }
           }
     })
</script>

