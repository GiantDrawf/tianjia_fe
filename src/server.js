/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2020-12-31 21:08:04
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-07 10:51:03
 * @Description: 你 kin 你擦
 */
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
