import cookie from 'cookie';

export const getNextCookies = ctx => {
  const cookieStr =
    ctx && ctx.req ? ctx.req.headers.cookie : window.document.cookie;
  return cookie.parse(cookieStr || '');
};