'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/use/getList', controller.home.getList);  //获取数据
  router.post('/use/Login', controller.home.Login);   //登录权
  router.post('/use/Inster', controller.home.Inster);  //添加数据
  router.post('/use/Deletes', controller.home.Deletes);  //删除数据
};
