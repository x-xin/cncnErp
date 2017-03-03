import { requestLogin } from '../api'
import { ACCOUNT_MUTATION } from './types'

export default {
  postLogin({ commit, state }, {params, success, error}) {
    state.isShowLoading = true
    requestLogin(params)
      .then(res => {
          commit(ACCOUNT_MUTATION, { account: res.data.user.username})
          success && success(res)
          state.isShowLoading = false
      })
      .catch(res => {
          error && error(res)
          state.isShowLoading = false
      })
  }
}
