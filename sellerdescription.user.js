// ==UserScript==
// @name         淘宝详情页显示
// @namespace    https://github.com/microleft/sellerdescription
// @icon         https://www.taobao.com/favicon.ico
// @version      0.3
// @description  禁止淘宝详情页跳转
// @author       mic
// @match        https://rate.taobao.com/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function () {
    var config = { childList: true, subtree: true };
    var callback = function (mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                if (mutation.target.tagName == 'SCRIPT' && mutation.target.innerHTML.indexOf("window.location.href") >= 0) {
                    mutation.target.innerHTML = '';
                }

                if (mutation.target.tagName == 'SCRIPT' && mutation.target.innerHTML.indexOf("addEventListener") >= 0) {
                    mutation.target.innerHTML = '';
                    observer.disconnect();
                }
            }
        }
    };
    var observer = new MutationObserver(callback);
    observer.observe(document.body, config);
})();