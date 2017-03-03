export default {
  author: state => {
    return state.author + "."
  },
  loading: state => {
    return state.isShowLoading
  },
  account: state => {
    return state.account
  }
}
