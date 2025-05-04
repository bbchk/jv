import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  if (ev.detail.contentPath === routes['default']) {
    // console.error('yes, it is err');
  }
});

export { html, css };
