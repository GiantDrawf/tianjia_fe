/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-13 16:08:41
 * @LastEditors: zhujian
 * @LastEditTime: 2021-06-24 14:32:07
 * @Description: 你 kin 你擦
 */
import createXhr from './createXhr';

/**
 * @description: request请求
 * @param {String} url
 * @param {Object} config
 * @return {Promise}
 */
const request = (
  url,
  {
    data = {},
    type = 'get',
    dataType = 'json',
    cache = new Date().valueOf(),
    timeout = 60000,
    async = true,
  } = {}
) => {
  return Promise.race([
    new Promise((resolve, reject) => {
      const xhr = createXhr();

      // 对参数进行处理
      const params = [];

      if (typeof data === 'object' && type.toLocaleLowerCase() === 'get') {
        for (const key of Object.keys(data)) {
          params.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          );
        }
      } else if (type.toLocaleLowerCase() !== 'post') {
        reject(new Error('typeError|data必须为一个对象'));

        return;
      }

      const caches = [];

      if (cache) {
        caches.push(`_=${cache}`);
      }

      if (type.toLocaleLowerCase() === 'get') {
        if (url.includes('?')) {
          url = `${url}&${[...params, ...caches].join('&')}`;
        } else {
          url = `${url}?${[...params, ...caches].join('&')}`;
        }
      } else if (url.includes('?')) {
        url = `${url}&${caches.join('&')}`;
      } else {
        url = `${url}?${caches.join('&')}`;
      }

      xhr.open(type, url, async);
      if (type.toLocaleLowerCase() === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            switch (dataType) {
              case 'json':
                try {
                  const result = new Function(`return ${xhr.responseText}`)();

                  if (typeof result === 'object') {
                    resolve(result);
                  } else {
                    reject(
                      new Error(
                        `typeError|json 不是对象|${encodeURIComponent(
                          xhr.responseText
                        )}`
                      )
                    );
                  }
                } catch (e) {
                  reject(
                    new Error(
                      `typeError|json 解析错误|${encodeURIComponent(
                        xhr.responseText
                      )}`
                    )
                  );
                }
                break;
              default:
                resolve(xhr.responseText);
            }
          } else {
            reject(new Error(`requestError|请求失败|${xhr.status}`));
          }
        }
      };
      xhr.send(
        type.toLocaleLowerCase() === 'get' ? null : JSON.stringify(data)
      );
    }),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`timeout|请求超时${timeout}`));
      }, timeout);
    }),
  ]);
};

export default request;
