import router from '@/router';
import { getToken } from '@/utils/auth';

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next({
      path: '/login',
    });
  }
})
;
