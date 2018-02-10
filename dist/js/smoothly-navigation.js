'use strict';

!function () {
    var view = document.querySelector('nav.menu');
    var controller = {
        view: null,
        aTags: null,
        init: function init(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation: function initAnimation() {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollElement: function scrollElement(element) {
            var top = element.offsetTop;
            var currentTop = window.scrollY; //起始位置
            var targetTop = top - 80; //结束位置
            var s = targetTop - currentTop;
            var coords = { y: currentTop };
            var t = Math.abs(s / 100 * 300);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            var aTags = this.view.querySelectorAll('nav > ul > li > a');

            for (var i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (msg) {
                    msg.preventDefault(); //阻止默认动作
                    var a = msg.currentTarget;
                    var href = a.getAttribute('href');
                    var element = document.querySelector(href);
                    var rect = element.getBoundingClientRect();
                    _this.scrollElement(element);
                };
            }
        }
    };

    controller.init(view);
}.call();