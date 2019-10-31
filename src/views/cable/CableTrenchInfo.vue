<template>
    <div>
      <a-card class="card" title="电缆井基础信息" :bordered="false">
        <cable-info ref="CableInfo" :showSubmit="false" />
      </a-card>
      <a-card class="card" title="电缆井CAD" :bordered="false">
        <cable-cad ref="CableCad" :showSubmit="false" />
      </a-card>

      <!-- fixed footer toolbar -->
      <!--<footer-tool-bar :style="{ width: isSideMenu() && isDesktop() ? `calc(100% - ${sidebarOpened ? 256 : 80}px)` : '100%'}">-->

        <!--<a-button type="primary" @click="validate" :loading="loading">提交</a-button>-->
      <!--</footer-tool-bar>-->
      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: center"
      >
        <a-button htmlType="submit" type="primary">保存</a-button>
        <a-button style="margin-left: 8px">取消</a-button>
      </a-form-item>
    </div>
</template>

<script type="es6">
  import CableInfo from './CableInfo'
  import CableCad from './CableCAD'
  import FooterToolBar from '@/components/FooterToolbar'
  import { mixin, mixinDevice } from '@/utils/mixin'
  const fieldLabels = {
    name: '仓库名',
    url: '仓库域名',
    owner: '仓库管理员',
    approver: '审批人',
    dateRange: '生效日期',
    type: '仓库类型',
    name2: '任务名',
    url2: '任务描述',
    owner2: '执行人',
    approver2: '责任人',
    dateRange2: '生效日期',
    type2: '任务类型'
  }
    export default {
      name: 'AdvancedForm',
      mixins: [mixin, mixinDevice],
      components: {
        CableInfo,
        CableCad,
        FooterToolBar
      },
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>

</style>
