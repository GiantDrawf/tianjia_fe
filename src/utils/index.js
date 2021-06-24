/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-06-19 15:51:41
 * @LastEditors: zhujian
 * @LastEditTime: 2021-06-23 16:44:27
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

/**
 * 获取
 * @param {Number} min
 * @param {Number} max
 */
const getRandomNum = (start, end) =>
  Math.floor(Math.random() * (end - start)) + start;

/**
 * 手机号脱敏
 * @param {String} phoneNumber 手机号
 * @returns
 */
const desensitizationPhoneNumber = (phoneNumber) =>
  String(phoneNumber).replace(/(\d{3})\d*(\d{4})/, '$1****$2');

export { isPromise, getRandomNum, desensitizationPhoneNumber };
