import { requestLogin } from '../api'
import { ACCOUNT_MUTATION,LOADING_MUTATION } from './types'

export default {
  postLogin({ commit, state }, {params, success, error}) {
    commit(LOADING_MUTATION, { isShowLoading: true})
    requestLogin(params)
      .then(res => {
        commit(ACCOUNT_MUTATION, { account: res.data.user.username})
        success && success(res)
        commit(LOADING_MUTATION, { isShowLoading: false})
      })
      .catch(res => {
        error && error(res)
        commit(LOADING_MUTATION, { isShowLoading: false})
      })
  }
}
