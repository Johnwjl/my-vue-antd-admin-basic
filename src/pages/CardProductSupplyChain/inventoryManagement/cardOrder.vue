<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null : 'fold'">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="订购发起日"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-date-picker style="width: 100%" placeholder="请输入日期" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="卡厂"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择" allowClear>
                  <a-select-option value="1">A厂</a-select-option>
                  <a-select-option value="2">B厂</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="产品团队"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择" allowClear>
                  <a-select-option value="1">A队</a-select-option>
                  <a-select-option value="2">B队</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="卡基编号"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="订购状态"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择" allowClear>
                  <a-select-option value="1">已订购</a-select-option>
                  <a-select-option value="2">订购中</a-select-option>
                  <a-select-option value="3">未订购</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="是否删除"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择" allowClear>
                  <a-select-option value="1">是</a-select-option>
                  <a-select-option value="2">否</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="卡基名称"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-input placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="产品经理"
                :labelCol="{ span: 5 }"
                :wrapperCol="{ span: 18, offset: 1 }"
              >
                <a-select placeholder="请选择" allowClear>
                  <a-select-option value="1">张三</a-select-option>
                  <a-select-option value="2">刘</a-select-option>
                  <a-select-option value="3">王</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? '收起' : '展开' }}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <!-- 操作按钮 -->
      <a-space class="operator">
        <a-button @click="showModal" type="primary">新增</a-button>
        <a-button>编辑</a-button>
        <a-button>提交</a-button>
        <a-button>审批通过</a-button>
        <a-button>退回</a-button>
      </a-space>
      <!-- 表格组件 -->
      <standard-table
        :columns="columns"
        :dataSource="dataSource"
        :selectedRows.sync="selectedRows"
        @clear="onClear"
        @change="onChange"
        @selectedRowChange="onSelectChange"
      >
        <div slot="description" slot-scope="{ text }">
          {{ text }}
        </div>
        <div slot="action" slot-scope="{ text, record }">
          <a style="margin-right: 8px"> <a-icon type="plus" />新增 </a>
          <a style="margin-right: 8px"> <a-icon type="edit" />编辑 </a>
          <a @click="deleteRecord(record.key)">
            <a-icon type="delete" />删除1
          </a>
          <a @click="deleteRecord(record.key)" v-auth="`delete`">
            <a-icon type="delete" />删除2
          </a>
          <router-link :to="`/list/query/detail/${record.key}`"
            >详情</router-link
          >
        </div>
        <template slot="statusTitle">
          订购状态
          <a-icon @click.native="onStatusTitleClick" type="info-circle" />
        </template>
      </standard-table>
      <!-- 新增弹窗 -->
      <a-modal
        v-model="visible"
        :width="1000"
        title="新增"
        on-ok="handleOk"
        :maskClosable="false"
        :centered="true"
      >
        <template slot="footer">
          <a-button key="back" @click="handleCancel">
            取消
          </a-button>
          <a-button
            key="submit"
            type="primary"
            :loading="loading"
            @click="handleOk"
          >
            提交
          </a-button>
        </template>
        <!-- basicForm -->
        <basic-form></basic-form>
      </a-modal>
    </div>
  </a-card>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import BasicForm from '@/pages/form/basic/BasicForm'
const columns = [
  {
    title: '卡基编号',
    dataIndex: 'no',
  },
  {
    title: '卡基名称',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' },
  },
  {
    title: '卡厂',
    dataIndex: 'callNo',
    sorter: true,
    needTotal: true,
    customRender: (text) => text + ' 分厂',
  },
  {
    dataIndex: 'status',
    needTotal: true,
    slots: { title: 'statusTitle' },
  },
  {
    title: '订购发起日',
    dataIndex: 'updatedAt',
    sorter: true,
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
  },
]

const dataSource = []

for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    no: 'NO ' + i,
    description: 'no12345678',
    callNo: Math.floor(Math.random() * 1000),
    // status: Math.floor(Math.random() * 10) % 4,
    status: '已订购',
    updatedAt: '2018-07-26',
  })
}

export default {
  name: 'QueryList',
  components: { StandardTable, BasicForm },
  data() {
    return {
      advanced: true,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      //
      loading: false,
      visible: false,
    }
  },
  authorize: {
    deleteRecord: 'delete',
  },
  methods: {
    deleteRecord(key) {
      this.dataSource = this.dataSource.filter((item) => item.key !== key)
      this.selectedRows = this.selectedRows.filter((item) => item.key !== key)
    },
    toggleAdvanced() {
      this.advanced = !this.advanced
    },
    remove() {
      this.dataSource = this.dataSource.filter(
        (item) =>
          this.selectedRows.findIndex((row) => row.key === item.key) === -1
      )
      this.selectedRows = []
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onStatusTitleClick() {
      this.$message.info('你点击了状态栏表头')
    },
    onChange() {
      this.$message.info('表格状态改变了')
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    addNew() {
      this.dataSource.unshift({
        key: this.dataSource.length,
        no: 'NO ' + this.dataSource.length,
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: '2018-07-26',
      })
    },
    handleMenuClick(e) {
      if (e.key === 'delete') {
        this.remove()
      }
    },
    //
    showModal() {
      this.visible = true
    },
    handleOk() {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel() {
      this.visible = false
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  margin-bottom: 54px;
}
.fold {
  width: calc(100% - 216px);
  display: inline-block;
}
.operator {
  margin-bottom: 18px;
}
@media screen and (max-width: 900px) {
  .fold {
    width: 100%;
  }
}
// /deep/ .ant-modal {
//   top: 50px;
// }
/deep/ .ant-modal-body {
  max-height: 800px;
  overflow-y: auto;
}
/deep/ .ant-modal-wrap {
  overflow: hidden;
}
</style>
