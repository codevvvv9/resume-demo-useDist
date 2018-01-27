!function () {
    let aTags = document.querySelectorAll('nav > ul > li > a')
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);


    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (msg) {
            msg.preventDefault()//阻止默认动作
            // console.log(msg)
            // console.log(msg.currentTarget)
            let a = msg.currentTarget
            //console.log(a.getAttribute('href'))//写的什么什么就是什么
            // console.log(a.href)//带http协议
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let rect = element.getBoundingClientRect()
            let top = element.offsetTop

            let currentTop = window.scrollY //起始位置
            let targetTop = top - 80 //结束位置
            let s = targetTop - currentTop
            //console.log(s)
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

            // let n = 25 //一共动25次
            // let t = 500 / n //多长时间动一次
            // let currentTop = window.scrollY
            // let targetTop = top - 80
            // let S = targetTop - currentTop
            // let s = S / n//每次移动的距离
            // let i = 0
            // // console.log(currentTop)
            // // console.log(targetTop)
            // // console.log(distance)
            // let id = setInterval(() => {
            //     if (i === n) {
            //         window.clearInterval(id)
            //         return
            //     }
            //     i = i + 1
            //     window.scrollTo(0, currentTop + distance * i)
            // }, t)

        }
    }
}.call()