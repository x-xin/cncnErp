import {
  NAME_MUTATION,
  ACCOUNT_MUTATION,
  LOADING_MUTATION
} from './types'

export default {
  [NAME_MUTATION] (state, payload) {
    state.currentName = payload.currentName
  },
  [ACCOUNT_MUTATION] (state, payload) {
    state.account = payload.account
  },
  [LOADING_MUTATION] (state, payload) {
    state.isShowLoading = payload.isShowLoading
  }
}
