/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-06-19 15:51:41
 * @LastEditors: zhujian
 * @LastEditTime: 2021-06-19 15:53:03
 * @Description: 你 kin 你擦
 */

/**
 * 判断函数是否为promise
 * @param {*} fn
 * @returns
 */
const isPromise = (fn) => {
  return !!fn.then;
};

export { isPromise };
