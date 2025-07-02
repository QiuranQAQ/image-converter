// 导入我们的 HTML 文件内容
import html from './index.html';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 只响应根路径的请求
    if (url.pathname === '/') {
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    }

    // 对于其他路径，返回 404
    return new Response('Not Found', { status: 404 });
  },
};