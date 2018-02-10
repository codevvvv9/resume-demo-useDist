'use strict';

/**
 * 1.5秒后移出加载动画,给网络延迟1.5秒
 */
setTimeout(function () {
  siteWelcome.classList.remove('active');
}, 1500);