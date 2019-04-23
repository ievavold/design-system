(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('clipboard')) :
  typeof define === 'function' && define.amd ? define(['clipboard'], factory) :
  (global = global || self, factory(global.ClipboardJS));
}(this, function (ClipboardJS) { 'use strict';

  var buttonTextDelay = 1500; // milliseconds
  var cb = new ClipboardJS('.docs-uses-clipboard');
  cb.on('success', function (event) {
      var elem = event.trigger;
      if (elem instanceof HTMLElement) {
          var wasText_1 = elem.innerText;
          elem.innerText = 'Copied';
          setTimeout(function () {
              elem.innerText = wasText_1;
          }, buttonTextDelay);
      }
  });

}));
