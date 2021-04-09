/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-08 17:25:00
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-08 18:15:45
 * @Description: 你 kin 你擦
 */
const env = process.env.NODE_ENV;
const isDev = env === 'development';

// 页面路由管理
const pageModuleMap = {
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
};

const apiPath = isDev ? 'http://localhost:7001' : 'https://api.tianjia.live';

export default { pageModuleMap, apiPath };
