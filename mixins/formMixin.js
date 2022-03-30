import { mapActions } from 'vuex'
export const formMixin = {
  methods: {
    ...mapActions({
      setShowMessage: 'formSubmissionMessage/setShowMessage',
      setMessageType: 'formSubmissionMessage/setMessageType',
    }),
    clearState() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    cancelEvent() {
      this.$refs.form.reset()
      this.clearState()
      this.setShowMessage(false)
    },
    saveEvent() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          this.setShowMessage(true)
          this.setMessageType('success')
          this.scrollToTop()
          setTimeout(() => {
            this.clearState()
            this.$refs.form.reset()
          }, 4000)
        } else {
          this.setShowMessage(true)
          this.setMessageType('error')
          this.scrollToTop()
        }

        setTimeout(() => {
          this.setShowMessage(false)
        }, 4000)
      })
    },
  },
}