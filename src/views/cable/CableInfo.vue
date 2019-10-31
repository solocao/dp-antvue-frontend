<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="电缆井名称">
          <a-input
            placeholder="请输入电缆井名称"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入电缆井名称', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="坐标（X）">
          <a-input
            placeholder="请输入坐标（X）"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入坐标（X）', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item label="坐标（Y）">
          <a-input
            placeholder="请输入坐标（Y）"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入坐标（Y）', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="井长">
          <a-input
            placeholder="请输入井长"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入井长', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="井宽">
          <a-input
            placeholder="请输入井宽"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入井宽', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item label="深度">
          <a-input
            placeholder="请输入深度"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入深度', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="上顶埋深">
          <a-input
            placeholder="请输入上顶埋深"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入上顶埋深', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="接头个数">
          <a-input
            placeholder="请输入接头个数"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入接头个数', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item label="井盖尺寸">
          <a-input
            placeholder="请输入井盖尺寸"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入井盖尺寸', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item label="井盖数量">
          <a-input
            placeholder="请输入井盖数量"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入井盖数量', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item label="井盖材质">
          <a-input
            placeholder="请输入井盖材质"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入井盖材质', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item label="井盖类型">
          <a-select
            placeholder="请选择井盖类型"
            v-decorator="[
              'type',
              {rules: [{ required: true, message: '请选择井盖类型'}]}
            ]" >
            <a-select-option value="方">方</a-select-option>
            <a-select-option value="圆">圆</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'CableInfo',
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    },
    validate (rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error('需要以 user- 开头'))
      }
      callback()
    }
  }
}
</script>

<style scoped>

</style>
