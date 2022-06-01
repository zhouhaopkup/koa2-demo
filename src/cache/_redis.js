/**
 * @description 连接redis的方法 get set
 * @author zhouhao
 */

 const { createClient } = require('redis')
 // const { REDIS_CONF } = require('../conf/db')
 
 const client = createClient()
 client.on('err', (err) => {
     console.error('Redis Client Error: ', err)
 })
 async function start(){
     await client.connect()
 }
 
 start()
 
 /**
  * 
  * @param {string} key 键
  * @param {string} val 值
  * @param {number} timeout 过期时间, 单位 s 
  */
 async function set(key, val, timeout = 60 * 60) { 
     if(typeof val === 'object') {
         val = JSON.stringify(val)
     }
     await client.set(key, val)
     await client.expire(key, timeout)
 }
 
 async function get(key) {
     const val = await client.get(key)
     if(!val) {
         return null
     }
     try{
         return JSON.parse(val)
     } catch(err) {
         return val
     }
 }
 
 module.exports = {
     set,
     get
 }