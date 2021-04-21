/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2021-04-13 16:30:02
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-13 16:30:19
 * @Description: 你 kin 你擦
 */
export default function creatXhr() {
  if (typeof XMLHttpRequest !== 'undefined') {
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject !== 'undefined') {
    if (typeof creatXhr.activeXString !== 'string') {
      const versions = [
        'MSXML2.XMLHttp.6.0',
        'MSXML2.XMLHttp.3.0',
        'MSXML2.XMLHttp',
      ];

      for (const key of versions) {
        try {
          new ActiveXObject(key);
          creatXhr.activeXString = key;
          break;
        } catch (e) {
          console.log(e);
        }
      }
    }

    return new ActiveXObject(creatXhr.activeXString);
  } else {
    throw new Error('不支持 XMLHttpRequest');
  }
}
