
<template>

  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
     
      label="应用名称"
      width="180">
      <!---潜入复杂内容-->
      <template #default="scope">
        <div class='row-1'>
            <img src="https://cdn-app-icon.pgyer.com/e/7/6/2/4/e762494b33042bd7beaccf73ef338022?x-oss-process=image/resize,m_lfit,h_60,w_60/format,jpg" alt="">
            <div style='display:inline-block'>
                  <p>{{scope.row.name}}</p>  
                  <p>{{scope.row.system}}</p>      
            </div>
        </div>
      </template>
    </el-table-column>
  
    <el-table-column
      label="版本"
      width="180">
    </el-table-column>
    <el-table-column
      prop="downloadType"
      label="下载方式"
      >
       <template #default="scope">
       <span>{{scope.row.edition}}</span>
      <i class='el-icon-s-promotion' ></i>
       </template>
      
    </el-table-column>
      <el-table-column
     
      prop="updateTime"
      label="更新时间"
      width="150">
    </el-table-column>
 
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template #default="scope">
         
        <el-button
          size="mini"
          type="danger"
          @click="handleDetail(scope.$index, scope.row)">详情</el-button>
           <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script lang='ts'>
  export default {
    methods: {
      handleClick(row:any) {
        console.log(row);
      },
      handleEdit(index:Number,row:any){
          console.log(index,row)

      },
      handleDetail(index:Number,row:any){
           console.log(index,row)
           this.$router.push('/appDetail')
      }
    },


    data() {
      return {
        tableData: [{
          name: '合伙人APP',
         updateTime: '2016-05-02 18:02',
         system:'安卓',
          edition: 'V3.4.1',
          downloadType: 'pgyer.com/sdbatterypy',
          qrCodeImg:'https://www.pgyer.com/app/qrcode/sdbatterypy',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          name: '合伙人APP',
          updateTime: '2016-05-02 18:02',
          system:'安卓',
          edition: 'V3.4.1',
          downloadType: 'pgyer.com/sdbatterypy',
          qrCodeImg:'https://www.pgyer.com/app/qrcode/sdbatterypy',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          name: '星云APP',
         updateTime: '2016-05-02 18:02',
          system:'安卓',
          edition: 'V3.4.1',
          downloadType: 'pgyer.com/sdbatterypy',
          qrCodeImg:'https://www.pgyer.com/app/qrcode/sdbatterypy',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          name: 'IBO',
         updateTime: '2016-05-02 18:02',
          system:'安卓',
          edition: 'V3.4.1',
          downloadType: 'pgyer.com/sdbatterypy',
          qrCodeImg:'https://www.pgyer.com/app/qrcode/sdbatterypy',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>

<style >
.row-1>img{
         width:40px;
         height: 40px;
         margin-right: 10px;
     }
.row-1>div>p{
   margin:0;
}
.row-1>div>p:nth-of-type(1){
    font-size:14px;
    font-weight: bold;
}
.row-1>div>p:nth-of-type(2){
    font-size:12px;
    
}
</style>
