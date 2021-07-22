/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-08 14:43:44
 * @LastEditors: zhujian
 * @LastEditTime: 2021-07-21 11:31:31
 * @Description: 路由管理
 */
const env = process.env.NODE_ENV;
const isDev = env === 'development';

export default [
  {
    url: 'about',
    redirectUrl: `article?aid=${
      isDev
        ? '5e4c99b9-d7c9-4548-b70e-f9c6d3a3e39c'
        : 'dd473f9e-e918-4406-8883-e43eeb647eed'
    }&layout=noSide`,
    text: '关于天佳',
    children: [
      {
        url: 'profile',
        redirectUrl: `article?aid=${
          isDev
            ? '5e4c99b9-d7c9-4548-b70e-f9c6d3a3e39c'
            : 'dd473f9e-e918-4406-8883-e43eeb647eed'
        }`,
        text: '企业简介',
      },
      {
        url: 'core',
        redirectUrl: `article?aid=${
          isDev
            ? '51513348-b596-45d1-b4df-3c025cdef0d3'
            : 'e9aea13d-173d-43d0-ad5e-8455ee56235c'
        }`,
        text: '核心理念',
      },
      {
        url: 'history',
        redirectUrl: `article?aid=${
          isDev
            ? '2211eb8f-8e4b-4644-88c3-e6f649ada53f'
            : '82a8d98b-08d5-4da4-88b8-d4a62500ec35'
        }`,
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
  {
    url: 'serviceCenter',
    text: '服务中心',
  },
];
