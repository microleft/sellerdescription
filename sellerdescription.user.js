// ==UserScript==
// @name         淘宝详情页显示
// @namespace    https://github.com/microleft/sellerdescription
// @icon         https://www.taobao.com/favicon.ico
// @version      0.1
// @description  禁止淘宝详情页跳转
// @author       mic
// @match        https://rate.taobao.com/*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function () {
    Object.freeze(document.location);
    window.alert = console.log;
})();
