!function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollElement: function (element) {
            let top = element.offsetTop
            let currentTop = window.scrollY //起始位置
            let targetTop = top - 80 //结束位置
            let s = targetTop - currentTop
            var coords = { y: currentTop };
            var t = Math.abs((s / 100) * 300);
            if (t > 500) { t = 500 }
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav > ul > li > a')

            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (msg) => {
                    msg.preventDefault()//阻止默认动作
                    let a = msg.currentTarget
                    let href = a.getAttribute('href')
                    let element = document.querySelector(href)
                    let rect = element.getBoundingClientRect()
                    this.scrollElement(element)
                }
            }
        }
    }
    
    controller.init(view)
}.call()