//var model = Model({resourceName: 'Message'})
window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        initAV: function () {
            var APP_ID = 'Ab4oz3wKJtsVx6Kl2hFRLMSC-gzGzoHsz';
            var APP_KEY = 'itr83SzDAu6ccBwvfnkoSJoO';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        fetch: function () {
            var query = new AV.Query(resourceName); //用到了闭包
            return query.find() //是一个Promise对象

        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            //会返回一个Promise对象
            return x.save(object)  
        }
    }
}