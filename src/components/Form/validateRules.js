/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-06-16 20:40:03
 * @LastEditors: zhujian
 * @LastEditTime: 2021-06-22 20:08:53
 * @Description: 你 kin 你擦
 */
/**
 * @description: 验证是否必填
 * @param {*} val 必填值
 * @return {Boolean} boolean
 */
const required = (val, ...args) => {
  if (val === undefined || val === null) return false;

  if (typeof val === 'string') {
    const tmp = val.replace(/\s/g, '');

    return tmp.length > 0;
  }

  return true;
};

/**
 * @description: 验证是否为url
 * @param {String} val string
 * @return {Boolean} boolean
 */
const url = (val, ...args) => {
  const regex =
    /(https?|ftp|git|svn):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  return regex.test(val);
};

/**
 * 验证字符长度
 * @param {String} val
 * @param {*} minValue
 * @returns
 */
const min = (val, ...args) => {
  const minValue = parseFloat(args[0]);
  const value = isNaN(val) ? val.length : parseFloat(val);

  return value >= minValue;
};

/**
 * @description: 验证最大值
 * @param {Number} val
 * @return {Boolean} boolean
 */
const max = (val, ...args) => {
  const maxValue = parseFloat(args[0]);
  const value = isNaN(val) ? val.length : parseFloat(val);

  return isNaN(value) ? true : value <= maxValue;
};

/**
 * 验证是否为邮箱
 * @param {*} val
 * @param {*} args
 * @returns
 */
const email = (val, ...args) => {
  const regex =
    /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;

  return Boolean(val) && regex.test(val);
};

/**
 * 判断字数
 * @param {String} val
 * @param {*} args
 * @returns
 */
const len = (val, ...args) => {
  if (val === undefined || val === null) return false;

  const maxLength = Number(args[0]);
  return val.length <= maxLength;
};

/**
 * 判断手机号
 * @param {String} val
 * @param  {...any} args
 * @returns
 */
const phone = (val, ...args) => {
  const regex = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

  return Boolean(val) && regex.test(val);
};

export { required, url, min, max, email, len, phone };
