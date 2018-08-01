/*
* 登录、注册模块示例
* */
import dkAxios from '../jslibs/dk-axios'

/**
 * 登录接口
 * @param data
 */
const login = data => dkAxios({
  url: 'login/login',
  method: 'POST',
  data,
})
/**
 * 注册接口
 * @param data
 */
const register = data => dkAxios({
  url: 'login/register',
  method: 'POST',
  data,
})

export {
  login,
  register,
}
