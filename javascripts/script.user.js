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

function createScriptTag(url, callback) {
// script element
    var script = document.createElement('script');
    // cdn jquery
    script.src = url;
    // script attr
    script.type = 'text/javascript';
    var load = document.getElementsByTagName('head')[0].appendChild(script);

    if (typeof callback !== 'undefined') {
        // script loading event
        load.onreadystatechange = function() {
// chrome state is complete
// firefox state is loaded
            if (this.readyState === 'complete' || this.readyState === 'loaded') {
                callback;
            }
        };
        load.addEventListener('load', callback(), false);
    }
};

function initJquery() {
    createScriptTag('//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js', initQtip);
}

function initQtip() {
    createScriptTag('//cdnjs.cloudflare.com/ajax/libs/qtip2/2.2.0/jquery.qtip.min.js', initDhPlus);
}

function initDhPlus() {
    createScriptTag('//batur.info/dh-plus/javascripts/dh-plus.js');
}

initJquery();