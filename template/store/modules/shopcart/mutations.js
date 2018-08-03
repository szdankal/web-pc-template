import { ADD_NUM, MINUS_NUM } from './mutation-types';


export default {
  [ADD_NUM](state, num) {
    state.num += num
  },
  [MINUS_NUM](state, num) {
    state.num -= num
  },
}
