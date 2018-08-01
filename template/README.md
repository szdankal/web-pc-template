# dankal-mobile-template

## 1.项目架构目录说明

```cmd

├── api       
├── assets
│   ├── images  
│   └── styles  
├── components  #只存放全局组件
├── configs     #全局配置文件
├── filiters    #过滤器
├── jslibs      
├── layouts    
├── pages      
├── plugins 
├── server   服务层配置
├── static   特殊静态文件
└── store    全局状态管理



## 2.注意事项

 由于是基于服务器+客户端渲染模式,部分不支持服务器渲染的第三方插件在引用时会遇到Window或者Document is not defined该类型的报错

 ```javascript 
  //之前SPA模式引入是这样的
 import { swiper, swiperSlide } from 'vue-awesome-swiper'

//需更改成

let swiper,swiperSlide
    if(process.browser){
        swiper=require('vue-awesome-swiper').default.swiper
        swiperSlide=require('vue-awesome-swiper').default.swiperSlide
    }
 ```
