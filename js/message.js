!function () {
    var view = document.querySelector('section.message')
    
    var model = {
        initAV: function () {
            var APP_ID = 'Ab4oz3wKJtsVx6Kl2hFRLMSC-gzGzoHsz';
            var APP_KEY = 'itr83SzDAu6ccBwvfnkoSJoO';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        /**
         * 获取数据
         */
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() //是一个Promise对象

        },
        /**
         * 保存数据
         */
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            //会返回一个Promise对象
            return message.save({
                'name': name,
                'content': content
            })  
        }
    }
    var controller = {
        view: null,
        model: null,
        messagesList: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.messagesList = view.querySelector('#messagesList')
            this.form = view.querySelector('form')
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
           this.model.fetch().then(
                function (messages) {
                    let array = messages.map(function (item) {
                        return item.attributes
                    })
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messagesList.appendChild(li)
                    })
                },
                function (error) {
                    alert('提交失败， 请改天来留言')
                })
                .then(() => { }, (error) => {
                    console.log(error)
                });
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messagesList = document.querySelector('#messagesList')
                messagesList.appendChild(li)
                myForm.querySelector('input[name=name]').value = ''
                myForm.querySelector('input[name=content]').value = ''
                console.log(object);
            })
        }

    }

    controller.init(view, model)
}.call()