/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-08 17:25:00
 * @LastEditors: zhujian1995@outlook.com
 * @LastEditTime: 2024-02-05 10:43:42
 * @Description: 你 kin 你擦
 */
const env = process.env.NODE_ENV;
const isDev = env === 'development';

// 页面路由管理
const pageModuleMap = {
  home: {
    // 幻灯模块
    swiper: isDev ? 'i9dfk8qwhyp' : 't0binczn0bh',
    // 天佳心选模块
    tjSelected: isDev ? 'pjr21no95e' : 'pkxatosvbzb',
    // 品牌故事文章id
    brandStoryAid: isDev
      ? '73d05e7a-448a-443b-b968-9b11fd8cd955'
      : 'b5123f0f-852e-4c3a-ad75-af7b3dabf7b3',
    // 品牌故事标语
    brandStorySlogan: [
      {
        icon: 'flag',
        txt: '追求完美创造卓越',
      },
      {
        icon: 'globe',
        txt: '倡导节约低碳理念',
      },
      {
        icon: 'chartPie',
        txt: '全面高效管理系统',
      },
      {
        icon: 'chip',
        txt: '自主创新联动技术',
      },
    ],
    // 商业案例
    businessCase: isDev ? '9qyoai7w0jp' : 'tpbttao0wao',
    // 新闻中心
    brandInfo: isDev ? 'p8uot90rkhg' : '0l1i829vhd59',
  },
  // 关于天佳模块
  about: {
    aId: isDev
      ? 'e619377c-ff87-442c-a113-e3972256959e'
      : '87c4152c-c024-4da9-8f22-5f867577783c',
    children: {
      profile: {
        aid: isDev
          ? '5e4c99b9-d7c9-4548-b70e-f9c6d3a3e39c'
          : 'dd473f9e-e918-4406-8883-e43eeb647eed',
      },
      core: {
        aid: isDev
          ? '51513348-b596-45d1-b4df-3c025cdef0d3'
          : 'e9aea13d-173d-43d0-ad5e-8455ee56235c',
      },
      history: {
        aid: isDev
          ? '2211eb8f-8e4b-4644-88c3-e6f649ada53f'
          : '82a8d98b-08d5-4da4-88b8-d4a62500ec35',
      },
    },
  },
  // 新闻中心
  newsCenter: isDev ? 'p8uot90rkhg' : '0l1i829vhd59',
  // 公司新闻
  companyNews: isDev ? 'fsfny1cnnwc' : '29ijhruarxm',
  // 公司公告
  notice: isDev ? 'wh2qwplucw' : 'abroam34kx9',
  // 行业新闻
  industryNews: isDev ? '1qytd0udixdj' : 'vwx3r6ao3wm',
  // 招聘信息
  recruit: isDev ? 'gy0zq2qbofg' : 'vnn4wbplbs',
  // 全职岗位
  fulltime: isDev ? 'fbpnn82twjg' : '0o02grs6p71',
  // 兼职岗位
  parttime: isDev ? 'wwx8u2db4o' : 'kl0yvg844',
  // 实习岗位
  internship: isDev ? '6ag2c3epqx6' : 'towewa4x2l',
  // 产品中心
  products: isDev ? 'msw4lm2gha7' : '2baufdpaadq',
  // 商用空调
  commercial: isDev ? 'wjuoeudhvx9' : '20j6l081ksp',
  // 特种空调
  specialType: isDev ? 'x2idvhasetg' : 'g1al4qnaj3e',
  // 成功案例
  successes: isDev ? '9qyoai7w0jp' : 'tpbttao0wao',
  // 商业案例
  business: isDev ? 'plz8bok5q9' : '2m8n1fm8435',
  // 工业案例
  industrial: isDev ? '9u6evcf6m4u' : 'usclup0uy0j',
  // 家用案例
  household: isDev ? 'xrxcygw7rb' : 'jxnxhh0ujwn',
};

const apiPath = isDev ? 'http://localhost:7001' : 'http://api.tianjia.live';

const companyInfoMap = [
  {
    name: '电话',
    value: '13921745084',
    icon: 'images/Phone-icon.png',
  },
  {
    name: '邮箱',
    value: 'tianjiakongtiao@yeah.net',
    icon: 'images/print.png',
  },
  {
    name: '地址',
    value: '江苏省泰兴市华泰大厦8楼',
    icon: 'images/address.png',
  },
];

const contactInfoMap = [
  {
    label: '销售地址',
    value: '江苏省泰兴市华泰大厦8楼',
  },
  {
    label: '生产基地',
    value: '江苏省泰兴市城北高薪工业园区振兴路12号',
  },
  {
    label: '联系电话',
    value: '0523-87662206',
    isPhone: true,
  },
  {
    label: '销售电话',
    value: '13921745084',
    isPhone: true,
  },
  {
    label: 'E-mail',
    value: 'tianjiakongtiao@yeah.net',
  },
];

export default { pageModuleMap, apiPath, companyInfoMap, contactInfoMap };
