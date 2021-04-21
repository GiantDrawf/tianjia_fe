/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-13 15:33:59
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-20 17:59:53
 * @Description: 你 kin 你擦
 */
import request from '../utils/request';
import CONST from '../utils/const';

/**
 * @description: 获取模块数据
 * @param {String} mid 模块ID
 * @param {Number} showLimit 限制显示条数
 * @return {Promise}
 */
export const getModuleData = ({ mid, showLimit = 0, needAContent = 0 }) =>
  request(`${CONST.apiPath}/common/module/getDetail`, {
    data: {
      mid,
      showLimit,
      needAContent,
    },
    cache: false,
  });

/**
 * @description: 获取文章数据
 * @param {String} aid 文章Id
 * @return {Promise}
 */
export const getArticleData = (aid) =>
  request(`${CONST.apiPath}/common/article/getDetail`, {
    data: { aid },
    cache: false,
  });
