import * as modals from './components/modals';
import * as toasts from './components/toasts';

modals.init();

window.UW = {
  ...toasts.init()
};
