/*
 * @Author: miniyue 
 * @Date: 2019-11-14 19:45:42 
 * @Last Modified by:   miniyue 
 * @Last Modified time: 2019-11-14 19:45:42 
 */

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 获取数据
   */
  async getList() {
    const sql = await this.app.mysql.query('select * from loginlist')
    this.ctx.body = {
      code:1,
      sql
    }
  }

  /**
   * 登录
   */
  async Login() {
    const { username,password } = this.ctx.request.body;
    const $sql = `select * from loginlist where username='${username}' and password='${password}'`
    const setules = await this.app.mysql.query($sql)
    if(setules.length){
      this.ctx.body = {
        code:1,
        msg:'登录成功',
        setules
      }
    }else{
      this.ctx.body = {
        code:0,
        msg:'登录失败'
      }
    }
  }

  /**
   * 添加数据
   */
  async Inster (){
    const { username,password,addres,age } = this.ctx.request.body;
    const $sql = `insert into loginlist (username,password,addres,age) values ('${username}','${password}','${addres}','${age}')`;
    const setules = await this.app.mysql.query($sql)
    this.ctx.body = {
      code:1,
      setules
    }
  }

  /**
   * 删除数据
   */
  async Deletes(){
    const {id} = this.ctx.request.body;
    const $sql = `delete from loginlist where id='${id}'`;
    const setules = await this.app.mysql.query($sql)
    if(id.length > 50){
      this.ctx.body = {
        code:1,
        setules
      }
    }else{
      this.ctx.body = {
        code:1,
        msg:'数据丢了'
      }
    }
  }

}

module.exports = HomeController;
