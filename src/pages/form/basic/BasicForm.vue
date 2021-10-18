<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form>
      <a-form-item
        :label="$t('title')"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-input :placeholder="$t('titleInput')" />
      </a-form-item>
      <a-form-item
        label="卡基名称"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-input placeholder="请输入卡基名称" />
      </a-form-item>
      <a-form-item
        :label="$t('date')"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-date-picker style="width: 100%" placeholder="请输入日期" />
      </a-form-item>
      <a-form-item
        label="卡厂"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-select placeholder="请选择" allowClear>
          <a-select-option value="1">A厂</a-select-option>
          <a-select-option value="2">B厂</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="产品团队"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-select placeholder="请选择" allowClear>
          <a-select-option value="1">A厂</a-select-option>
          <a-select-option value="2">B厂</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="产品经理"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-select placeholder="请选择" allowClear>
          <a-select-option value="1">A厂</a-select-option>
          <a-select-option value="2">B厂</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="是否删除"
        :labelCol="{ span: 7 }"
        :wrapperCol="{ span: 10 }"
      >
        <a-select placeholder="请选择" allowClear>
          <a-select-option value="1">A厂</a-select-option>
          <a-select-option value="2">B厂</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BasicForm',
  i18n: require('./i18n'),
  data() {
    return {
      value: 1,
    }
  },
  computed: {
    desc() {
      return this.$t('pageDesc')
    },
  },
}
</script>

<style scoped></style>
