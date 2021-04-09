/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-08 14:43:44
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-09 17:04:56
 * @Description: 路由管理
 */
export default [
  {
    url: 'about',
    text: '关于天佳',
    children: [
      {
        url: 'profile',
        text: '企业简介',
      },
      {
        url: 'core',
        text: '核心理念',
      },
      {
        url: 'history',
        text: '发展历程',
      },
    ],
  },
  {
    url: 'newsCenter',
    text: '新闻中心',
    children: [
      {
        url: 'companyNews',
        text: '公司新闻',
      },
      {
        url: 'notice',
        text: '公司公告',
      },
      {
        url: 'industryNews',
        text: '行业新闻',
      },
    ],
  },
  {
    url: 'products',
    text: '产品中心',
    children: [
      {
        url: 'commercial',
        text: '商用空调',
      },
      {
        url: 'specialType',
        text: '特种空调',
      },
    ],
  },
  {
    url: 'successes',
    text: '成功案例',
    children: [
      {
        url: 'business',
        text: '商业案例',
      },
      {
        url: 'industrial',
        text: '工业案例',
      },
      {
        url: 'household',
        text: '家用案例',
      },
    ],
  },
  {
    url: 'serviceCenter',
    text: '服务中心',
  },
  {
    url: 'recruit',
    text: '招聘信息',
    children: [
      {
        url: 'fulltime',
        text: '全职岗位',
      },
      {
        url: 'parttime',
        text: '兼职岗位',
      },
      {
        url: 'internship',
        text: '实习岗位',
      },
    ],
  },
];
