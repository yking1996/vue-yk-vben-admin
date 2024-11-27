import { defineConfig } from '@vben/vite-config'

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/sh-back-manage': {
            changeOrigin: true,
            rewrite: (path) =>
              path.replace(/^\/sh-back-manage/, '/sh-back-manage'),
            target: 'http://api.sh.dev.mall-xy.com',
            ws: false,
          },
          '/sh-common-center': {
            changeOrigin: true,
            rewrite: (path) =>
              path.replace(/^\/sh-common-center/, '/sh-common-center'),
            target: 'http://api.sh.dev.mall-xy.com',
            ws: false,
          },
          '/sh-user-center': {
            changeOrigin: true,
            rewrite: (path) =>
              path.replace(/^\/sh-user-center/, '/sh-user-center'),
            target: 'http://api.sh.dev.mall-xy.com',
            ws: false,
          },
          '/xyj': {
            changeOrigin: true,
            rewrite: (path) =>
              path.replace(/^\/sh-back-manage/, '/sh-back-manage'),
            target: 'https://oss.dev.mall-xy.com/xyj',
            ws: false,
          },
        },
      },
    },
  }
})
