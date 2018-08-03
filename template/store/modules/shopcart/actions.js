export const asyncAdd = ({ commit }, num) => {
  setTimeout(() => {
    commit('addNum', num)
  }, 1000)
}

export const asyncMinus = ({ commit }, num) => {
  setTimeout(() => {
    commit('minusNum', num)
  }, 1000)
}
