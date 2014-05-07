var dhPlus = {
    options: {
        currentVersion: 0.5,
        $: window.jQuery,
        selectorTopic: 'div#zip center table tbody tr td table tbody tr td table tbody tr, div#zip table#asil tbody tr.titleclass',
        qtip: {},
        containerDhPlus: document.getElementById('dh-plus')
    },
    init: function() {
        var self = this;
        window.addEventListener('load', function() {
            self.initStyles();
            self.skipBanner();
            self.getTopics();
        }, false);
    },
    initStyles: function() {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '//batur.info/dh-plus/stylesheets/styles.css';
        link.type = 'text/css';
        document.body.insertBefore(link, null);
    },
    getBrowser: function() {
        if (navigator.userAgent.match(/firefox/i))
            return 'firefox';
        else if (navigator.userAgent.match(/chrome/i))
            return 'chrome';
        else if (navigator.userAgent.match(/opera/i))
            return 'opera';
        else
            return 'unknown';
    },
    skipBanner: function() {
        if (document.URL.indexOf('PageBanner', 0) > 0) {
            window.location = this.options.$('#btnpass').attr('href');
        }
    },
    getTopics: function() {
        var self = this;
        self.options.$(self.options.selectorTopic).each(function() {
            var $topic = self.getTopic(this);
            if (typeof $topic.attr('href') !== 'undefined') {
                self.setupQtip($topic);
                self.initQtip(window.jQuery(this));
            }
        });
    },
    setupQtip: function(el) {

        my = 'top left';
        at = 'left bottom';

        this.options.qtip = {
            url: el.attr('href'),
            text: el.text(),
            my: my,
            at: at
        };
    },
    initQtip: function(el) {
        var self = this;
        el.find('td:nth-child(2) > span > a').qtip({
            content: {
                text: 'i&#231;erik y&#252;kleniyor',
                title: {
                    text: self.options.qtip.text,
                    button: true
                },
                ajax: {
                    url: self.options.qtip.url,
                    dataType: 'html',
                    success: function(data, status) {
                        var newData = self.options.$(data);
                        newData.find('div#divAdnetKeyword table:eq(0) img').each(function() {
                            self.options.$(this).css('max-width', '760px');
                        });
                        newData.find('script').detach();
                        var firstComment = newData.find('div#divAdnetKeyword table:eq(0)').clone().wrap('<div></div>').parent().html();
                        firstComment = $(firstComment).html();
                        var respondButton = '<span></span>';
                        if (newData.find('img[title="Mesaja cevap at"]').parents('td.ultrasmall').find('a:eq(0)').length > 0) {
                            respondButton = newData.find('img[title="Mesaja cevap at"]').parents('td.ultrasmall').find('a:eq(0)').clone().wrap('<div></div>').parent().html();
                        }
                        this.set('content.text', respondButton + firstComment + respondButton);
//                        this.set('content.text', 'test');
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log('Error:' + textStatus + " " + errorThrown + " " + xhr);
                    }
                }
            },
            show: {
                event: 'mouseenter',
                effect: function(offset) {
                    self.options.$(this).slideDown(100); // "this" refers to the tooltip
                },
                delay: 300,
                solo: true // ... but show the tooltip when ready
            },
            hide: {
                event: 'click unfocus'
            },
            events: {
                render: function(event, api) {
                    self.options.$(window).bind('keydown', function(e) {
                        if (e.keyCode === 27) {
                            api.hide(e);
                        }
                    });
                }
            },
            position: {
                my: self.options.qtip.my,
                at: self.options.qtip.at
            },
            style: {
                classes: 'ui-tooltip-shadow ui-tooltip-light ui-tooltip-rounded',
                width: 1000,
                maxWidth: 100
            }
        });
    },
    getTopic: function(el) {
        var self = this,
                $topic;
        if (document.URL.indexOf('forumid', 0) > 0) {
            $topic = self.options.$(el).find('td:eq(1) span[class]:eq(0) > a');
        } else if (document.URL.indexOf('trends', 0) > 0) {
            $topic = self.options.$(el).find('td:eq(1) a[title]');
        }
        return $topic;
    }
};

dhPlus.init();
