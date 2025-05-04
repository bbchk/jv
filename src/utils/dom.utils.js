//========== DOM shorthand methods ==========
// DOM utility functions for easier element selection
// and event handling. Extends the `window`, `document`,
// and `HTMLElement` prototypes with  methods.

const $ = function (args) {
  return this.querySelector(args);
};

const $$ = function (args) {
  return this.querySelectorAll(args);
};

const on = function (event, listener, options) {
  this.addEventListener(event, listener, options);
};

const off = function (event, listener, options) {
  this.removeEventListener(event, listener, options);
};

window.$ = $.bind(document);
window.$$ = $$.bind(document);
window.on = on.bind(window);
window.off = off.bind(window);

document.$ = $.bind(document);
document.$$ = $$.bind(document);
document.on = on.bind(document);
document.off = off.bind(document);

HTMLElement.prototype.$ = function (args) {
  return $.call(this, args);
};

HTMLElement.prototype.$$ = function (args) {
  return $$.call(this, args);
};

HTMLElement.prototype.on = function (event, listener, options) {
  on.call(this, event, listener, options);
};

HTMLElement.prototype.off = function (event, listener, options) {
  off.call(this, event, listener, options);
};
