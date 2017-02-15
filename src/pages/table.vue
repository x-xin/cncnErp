<template>
  <div class="cncn-main">
    <div class="cncn-main-panel">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        :data="tableData"
        border
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
          prop="id"
          label="ID"
          sortable>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column>
      </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  import { requestTable } from '../api';
  export default {
    name: 'table',
    data () {
      return {
        tableData: [],
        loading: false
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      getData() {

        this.loading = true

        requestTable({
          //
        }).then(data => {
          this.loading = false
          console.log(data);
          this.tableData = data.data
        });

      }
    },
    mounted () {
      this.getData();
    }

  }
</script>
<style lang="stylus">
  
</style>