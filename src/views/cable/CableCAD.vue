<template>
  <div>
    <a-button size="small" type="primary" ghost icon="plus" @click="setCAD">编辑CAD</a-button>

  </div>
</template>

<script type="es6">
    export default {
      name: 'CableCAD',
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
        },
        setCAD() {
          // window.location.href = '/demo/demo';
          this.$router.push({ name: '电缆井孔' })
        },
      }
    }
</script>

<style lang="less" scoped>

</style>
