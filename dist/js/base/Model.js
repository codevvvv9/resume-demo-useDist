'use strict';

//var model = Model({resourceName: 'Message'})
window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        initAV: function initAV() {
            var APP_ID = 'Ab4oz3wKJtsVx6Kl2hFRLMSC-gzGzoHsz';
            var APP_KEY = 'itr83SzDAu6ccBwvfnkoSJoO';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function fetch() {
            var query = new AV.Query(resourceName); //用到了闭包
            return query.find(); //是一个Promise对象
        },
        save: function save(object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            //会返回一个Promise对象
            return x.save(object);
        }
    };
};