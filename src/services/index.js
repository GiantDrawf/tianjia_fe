/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-13 15:33:59
 * @LastEditors: zhujian
 * @LastEditTime: 2021-07-06 17:45:17
 * @Description: 你 kin 你擦
 */
import request from '../utils/request';
import CONST from '../utils/const';

/**
 * @description: 获取模块数据
 * @param {Object} params params
 * @param {String} params.mid 模块ID
 * @param {Number} params.page 页码
 * @param {Number} params.needAContent 是否需要文章内容
 * @param {Number} params.pageSize 限制条数
 * @param {String} params.fuzzy 模糊搜索关键词
 * @return {Promise}
 */
export const getModuleData = ({
  mid,
  needAContent = 0,
  page = 1,
  pageSize = 10,
  fuzzy = '',
}) =>
  request(`${CONST.apiPath}/common/module/getDetail`, {
    data: {
      mid,
      needAContent,
      page,
      pageSize,
      fuzzy,
    },
    type: 'POST',
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
