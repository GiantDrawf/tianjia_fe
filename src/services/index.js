/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-13 15:33:59
 * @LastEditors: zhujian
 * @LastEditTime: 2021-06-24 14:27:33
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

/**
 * 浏览文章
 * @param {String} aid aid
 * @returns
 */
export const browseArticle = (aid) =>
  request(`${CONST.apiPath}/h5/article/browseArticle`, {
    data: { aid },
    cache: false,
  });

/**
 * 获取热门文章
 * @param {Number} limit 返回条数
 * @returns
 */
export const getHotArticles = (limit = 10) =>
  request(`${CONST.apiPath}/h5/article/getHotArticles`, {
    data: { limit },
    cache: false,
  });

/**
 * 提交消息
 * @param {Object} payload
 * @returns
 */
export const submitMsg = (payload) =>
  request(`${CONST.apiPath}/h5/msg/create`, {
    data: payload,
    cache: false,
    type: 'POST',
  });

/**
 * 查询消息列表
 * @param {Object} payload
 * @returns
 */
export const queryMsg = (payload) =>
  request(`${CONST.apiPath}/common/msg/query`, {
    data: payload,
    type: 'POST',
    cache: false,
  });
