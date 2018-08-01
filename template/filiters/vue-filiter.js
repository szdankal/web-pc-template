import Vue from 'vue'
import env from '../configs/enviroment'

const { imgDomain } = env
Vue.filter('imgMapper', value => imgDomain + value)
