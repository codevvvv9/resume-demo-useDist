 //添加 offset类
 let specialTags = document.querySelectorAll('[data-x]')
 for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
 }

 findCloestAddRemoveOffset() //没滑动就让他出现
 window.addEventListener('scroll', function (scroll) {
     findCloestAddRemoveOffset()
 })

/**
 * 找到最近的tag并移除offset类
 */
 function findCloestAddRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }

    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    // console.log(id)
    //根据id找对应的元素
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
    // console.log(li)
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (msg) {
        msg.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (msg) {
        msg.currentTarget.classList.remove('active')
    }

}