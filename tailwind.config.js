/*
 * @Author: zhujian1995@outlook.com
 * @Date: 2020-12-31 21:08:04
 * @LastEditors: zhujian
 * @LastEditTime: 2021-04-20 16:04:09
 * @Description: 你 kin 你擦
 */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./**/**/*.html', './**/**/*.svelte'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      left: {
        '1/10': '10%',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      minWidth: {
        0: '0',
        '3/10': '30%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
