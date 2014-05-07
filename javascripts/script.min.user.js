// ==UserScript==
// @name	DH Plus
// @version	1.0
// @author	Batis <hello@batur.info>
// @description	DH Plus, Donanımhaberde forumlardaki açılmış başlıklar arasında konuya girmeden konuyu açan kişinin mesajını görmeni sağlar. Böylece daha hızlı ve keyifli bir donanımhaber deneyimi yaşarsın.
// @copyright	2011+, Batis (http://userscripts.org/users/batis)
// @include        http://*.donanimhaber.com/forum*
// @include        http://*.donanimhaber.com/trends*
// @include        http://*.donanimhaber.com/favorites*
// @include        http://ad.donanimhaber.com/PageBanner*
// ==/UserScript==
// Test eden kullanıcılar: Batis, OBERTAN
function createScriptTag(a,b){// script element
var c=document.createElement("script");// cdn jquery
c.src=a,// script attr
c.type="text/javascript";var d=document.getElementsByTagName("head")[0].appendChild(c);"undefined"!=typeof b&&(// script loading event
d.onreadystatechange=function(){"complete"===this.readyState||"loaded"===this.readyState},d.addEventListener("load",b(),!1))}function initJquery(){createScriptTag("//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js",initQtip)}function initQtip(){createScriptTag("//cdnjs.cloudflare.com/ajax/libs/qtip2/2.2.0/jquery.qtip.min.js",initDhPlus)}function initDhPlus(){createScriptTag("//localhost/smallprojects-2/dh-plus/dh-plus.js")}initJquery();